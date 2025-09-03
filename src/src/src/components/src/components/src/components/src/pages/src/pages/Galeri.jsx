import React, { useState } from "react";

function Galeri() {
  const [galeri, setGaleri] = useState([
    { id: 1, title: "Kegiatan 17 Agustus", url: "https://picsum.photos/200/150?random=10" },
    { id: 2, title: "Kerja Bakti", url: "https://picsum.photos/200/150?random=20" },
    { id: 3, title: "Olahraga Bersama", url: "https://picsum.photos/200/150?random=30" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Galeri Kegiatan</h1>
      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {galeri.map((item) => (
          <div key={item.id} style={{ textAlign: "center" }}>
            <img src={item.url} alt={item.title} style={{ borderRadius: "8px" }} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeri;
