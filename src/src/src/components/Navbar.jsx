import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#1e3a8a", color: "white" }}>
      <h2>Organisasi Kepemudaan Dusun Kesamben</h2>
      <ul style={{ display: "flex", gap: "15px", listStyle: "none" }}>
        <li><Link to="/" style={{ color: "white" }}>Beranda</Link></li>
        <li><Link to="/galeri" style={{ color: "white" }}>Galeri</Link></li>
        <li><Link to="/kegiatan" style={{ color: "white" }}>Kegiatan</Link></li>
        <li><Link to="/iuran" style={{ color: "white" }}>Iuran</Link></li>
        <li><Link to="/login" style={{ color: "white" }}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
