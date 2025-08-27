import express from "express";
import { addDoctor, getAllDoctors, loginAdmin } from "../controllers/admin.controller.js";
import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";
import { changeAvailability } from "../controllers/doctor.controller.js";

const adminRouter = express.Router();

adminRouter.post('/add-doctor', authAdmin, upload.single('image'), addDoctor);
adminRouter.post('/login', loginAdmin);
adminRouter.get('/get-all-doctors', authAdmin, getAllDoctors);
adminRouter.post('/change-availability', authAdmin, changeAvailability);

export default adminRouter;