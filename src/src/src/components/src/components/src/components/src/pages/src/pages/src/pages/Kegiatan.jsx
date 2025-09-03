import React, { useState } from "react";

function Kegiatan() {
  const [kegiatan] = useState([
    { id: 1, judul: "Rapat Bulanan", tanggal: "5 September 2025", lokasi: "Balai Dusun" },
    { id: 2, judul: "Kerja Bakti Bersama", tanggal: "12 September 2025", lokasi: "Lingkungan Dusun" },
    { id: 3, judul: "Lomba Olahraga", tanggal: "20 September 2025", lokasi: "Lapangan Desa" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Agenda Kegiatan</h1>
      <ul>
        {kegiatan.map((item) => (
          <li key={item.id}>
            <b>{item.judul}</b> - {item.tanggal} ({item.lokasi})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kegiatan;
