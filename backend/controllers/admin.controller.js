import validator from 'validator'
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import doctorModel from '../models/doctor.model.js'
import jwt from 'jsonwebtoken';

const addDoctor = async (req, res) => {
    try {
        const {
            name,
            email,
            password,
            speciality,
            degree,
            experience,
            about,
            fees,
            address
        } = req.body;
        const imageFile = req.file

        // check for all data to add Doctor
        if (name,
            !email ||
            !password ||
            !speciality ||
            !degree ||
            !experience ||
            !about ||
            !fees ||
            !address) {
            return res.json({ success: false, message: 'Missing Detailes' })
        }

        // validating email format
        if (!validator.isEmail(email))
            return res.json({ success: false, message: 'Please enter a valid email' })

        // validating strong password
        if (password.length < 8)
            return res.json({ success: false, message: 'Please enter a strong password' })

        // hashing Doctor password

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        // collect all processed data into single object to store into DB
        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        return res.json({ success: true, message: 'Doctor Added' })
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

// API for Admin Login
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email + password, process.env.JWT_SECRET);
            return res.json({ success: true, message: token });
        } else {
            return res.json({ success: false, message: 'Invalid credentials' });
        }

    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
}

export {
    addDoctor,
    loginAdmin
};