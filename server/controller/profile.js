



const User = require("../module/user")
const { uploadImageToCloudinary } = require("../utils/imageUploader")
const mongoose = require("mongoose")
const Profile = require("../module/profile")


exports.updateProfile = async (req, res) => {
  try {
    const {
      name = "",
      email= "",
      dateOfBirth = "",
      about = "",
      contactNumber = "",
      gender = "",
      income="",
      expensses="",
      investment="",
      saving= "",


    } = req.body
    const id = req.user.id

    
    const userDetails = await User.findById(id)
    const profile = await Profile.findById(userDetails.additionalDetails)

    const user = await User.findByIdAndUpdate(id, {
      name,
      email,
    })
    await user.save()

    
    profile.dateOfBirth = dateOfBirth
    profile.about = about
    profile.contactNumber = contactNumber
    profile.gender = gender
    profile.income= income
    profile.expensses= expensses
    profile.investment=investment
    profile.saving= saving

    
    await profile.save()

    
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec()

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      error: error.message,
    })
  }
}

exports.deleteAccount = async (req, res) => {
  try {
    const id = req.user.id
    console.log(id)
    const user = await User.findById({ _id: id })
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      })
    }
    
    await Profile.findByIdAndDelete({
      _id: new mongoose.Types.ObjectId(user.additionalDetails),
    })
    for (const productId of user.products) {
      await Product.findByIdAndUpdate(
        productId,
        { $pull: { customerParchased: id } },
        { new: true }
      )
    }
    
    await User.findByIdAndDelete({ _id: id })
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    })
    await productProgress.deleteMany({ userId: id })
  } catch (error) {
    console.log(error)
    res
      .status(500)
      .json({ success: false, message: "User Cannot be deleted successfully" })
  }
}



exports.updateDisplayPicture = async (req, res) => {
  try {
    const displayPicture = req.files.displayPicture
    const userId = req.user.id
    const image = await uploadImageToCloudinary(
      displayPicture,
      process.env.FOLDER_NAME,
      1000,
      1000
    )
    console.log(image)
    const updatedProfile = await User.findByIdAndUpdate(
      { _id: userId },
      { image: image.secure_url },
      { new: true }
    )
    res.send({
      success: true,
      message: `Image Updated successfully`,
      data: updatedProfile,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
}


exports.expensserDashboard = async (req, res) => {
  try {
    const Details = await Product.find({ product: req.user.id })

    const productData = productDetails.map((product) => {
      const totalCustomerParchased = product.customerPerchased.length
      const totalAmountGenerated = totalCustomerParchased * product.price

      
      const expenssesDataWithStats = {
        _id: product._id,
        productName: product.productName,
        productDescription: product.productDescription,
        
        totalCustomerParchased,
        totalAmountGenerated,
      }

      return expenssesDataWithStats
    })

    res.status(200).json({ product: productData })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Server Error" })
  }
}
