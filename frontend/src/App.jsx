import React from 'react'
import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home.page";
import DoctorsPage from "./pages/Doctors.page";
import LoginPage from "./pages/Login.page";
import AboutPage from "./pages/About.page";
import ContactPage from "./pages/Contact.page";
import MyProfilePage from "./pages/MyProfile.page";
import MyAppointments from "./pages/MyAppointments.page"
import Appointmentpage from './pages/Appointment.page';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/doctors/:speciality" element={<DoctorsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointmentpage />} />

      </Routes>
    </div>
  )
}

export default App