import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: "./.env" });
import cors from 'cors';
import connectToDB from './config/mongoDB.js';
import connectToCloudinary from './config/cloudinary.js';

const PORT = process.env.PORT || 3000;
const app = express();


// middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.send("API IS WORKING");
})

app.listen(PORT, () => {
    console.log(`Server is Running on PORT: ${PORT}`);
    connectToDB();
    connectToCloudinary();
});


