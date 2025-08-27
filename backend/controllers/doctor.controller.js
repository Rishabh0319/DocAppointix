import doctorModel from "../models/doctor.model.js";


const changeAvailability = async (req, res) => {
    try {
        const { docId } = req.body;
        const docData = await doctorModel.findById(docId);
        await doctorModel.findByIdAndUpdate(docId, { available: !docData.available });
        return res.json({ success: true, message: 'Availability Changed' })
    } catch (error) {
        console.error(error);
        return res.json({ success: false, message: error.message });
    }
}

export {
    changeAvailability
}