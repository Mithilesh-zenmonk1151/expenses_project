const express= require("express");
const app = express();
const dotenv= require("dotenv");
const database= require("./config/database");
const cookieParser = require("cookie-parser");
const cors= require("cors");

const userRoutes = require("./router/user");

const fileUpload = require("express-fileupload");
const { cloudinaryConnect } = require("./config/cloudinary");

dotenv.config();


const PORT = process.env.PORT || 4001;

database.connect();

cloudinaryConnect();


app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "/tmp/",
	})
);
app.use("/api/v1/auth", userRoutes);

app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});

app.listen(PORT, () => {
	console.log(`App is listening at ${PORT}`);
});
