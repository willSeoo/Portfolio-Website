import React from "react";
import { Routes, Route } from "react-router";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import NotFoundPage from "./Pages/NotFoundPage";
import BottomNavbar from "./components/BottomNavbar";
import Clock from "./components/Clock"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <nav class="fixed top-0 left-0 w-full bg-white z-50">
        <div class="w-full mx-auto px-9 py-6 flex justify-between items-center lg:px-10 lg:py-6">
          <div class="text-xl font-bold">Logo</div>
          <div class="space-x-4 font-bold">
           <Clock />
          </div>
        </div>
      </nav>
      <BottomNavbar />
    </div>
  );
};

export default App;
