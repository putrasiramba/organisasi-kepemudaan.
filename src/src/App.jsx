import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Galeri from "./pages/Galeri";
import Kegiatan from "./pages/Kegiatan";
import Iuran from "./pages/Iuran";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/kegiatan" element={<Kegiatan />} />
        <Route path="/iuran" element={<Iuran />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/settings" element={<AdminDashboard />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
