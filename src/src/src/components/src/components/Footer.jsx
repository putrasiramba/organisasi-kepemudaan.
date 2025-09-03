import React from "react";

function Footer() {
  return (
    <footer style={{ padding: "15px", background: "#1e3a8a", color: "white", marginTop: "30px" }}>
      <p>© {new Date().getFullYear()} Organisasi Kepemudaan Dusun Kesamben</p>
      <p>Kontak: 0896-3022-1639</p>
    </footer>
  );
}

export default Footer;
