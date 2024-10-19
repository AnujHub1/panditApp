import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

import OTP from "./Components/Login/Otp";
import UserRegister from "./Components/Register/User-Register";
import Edit from "./Components/Register/Edit";
import ProfileDetails from "./Components/Profile/Profile";
import Login from "./Components/Login/Login";
import Card from "./Components/Categories/Card";
import Show from "./Components/Categories/Show";
import ServicesUpdated from "./Components/ServiceUpdate/ServiceUpdate";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-28">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/login" element={<Login />} />
          <Route path="otp" element={<OTP />} />
          <Route path="register" element={<UserRegister />} />
          <Route path="edit" element={<Edit />} />
          <Route path="/profile" element={<ProfileDetails />} />
          <Route path="show" element={<Show />} />
          <Route path="service" element={<ServicesUpdated />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
