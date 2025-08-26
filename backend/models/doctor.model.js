import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    image: { type: String, require: true },
    speciality: { type: String, require: true },
    degree: { type: String, require: true },
    experience: { type: String, require: true },
    about: { type: String, require: true },
    available: { type: Boolean, default: true },
    fees: { type: Number, require: true },
    address: { type: Object, require: true },
    date: { type: Number, require: true },
    slots_booked: { type: Object, default: {} }
}, { minimize: false })

const doctorModel = mongoose.models.doctor || mongoose.model('doctor', DoctorSchema);

export default doctorModel;
