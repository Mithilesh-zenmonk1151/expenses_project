import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Input from 'react-phone-number-input/input'

// import UserAddModal from './UserAddModal';

function Update() {
  const [dateOfBirth, setDateOfBirth] = useState();
  const [about, setAbout]= useState("");
  const [phoneNumber, setPhoneNumber]= useState("");
//   const [addButton, setAddButton] =useState(false);
  
//   function addButtonClick(e){
//     e.preventDefault();
   
//     setAddButton(true);
//   }
//  function handleModal(e){
//   e.preventDefault();
 
//   setAddButton(false);
//  }
  const user = useSelector((state) => {
   return state.user
  })
  const Name= user.user.name;
  
   console.log("this is user.user name :",user.user.name)
    return (
        <div>
         Name: <p>{Name}</p>
         Email: <p>{user.user.email}</p>
             <form >
               
                     
                <h1>Add some Additional details</h1>
                <Input
  defaultCountry="US"
  type="number"
  value={phoneNumber}
  onChange={(e)=> setPhoneNumber(e.target.value)}/>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <input type='date'
      placeholder='Enter date of Birth'
     
      name='birthdate'
    value={dateOfBirth} onChange={(e)=>setDateOfBirth(e.target.value)}/>
      About:-
    <input type='text' value={about} onChange={(e)=>setAbout(e.target.value)}/>



    <h2> Enter Expensses here</h2>
    <button >Add</button>
   
   

   

            </form>
            {/* {addButton && <UserAddModal  hide={handleModal()}
/>} */}
        </div>
    )
}

export default Update
