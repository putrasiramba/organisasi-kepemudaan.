import React from "react";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Selamat Datang di Organisasi Kepemudaan Dusun Kesamben</h1>
      <p>
        Website resmi untuk mendukung tata kelola kegiatan kepemudaan, informasi
        acara, serta transparansi iuran masyarakat.
      </p>

      <Carousel />

      <section style={{ marginTop: "30px" }}>
        <h2>Visi & Misi</h2>
        <p>
          <b>Visi:</b> Membangun generasi muda yang berdaya, kreatif, dan peduli terhadap
          lingkungan masyarakat.
        </p>
        <p>
          <b>Misi:</b>
          <ul>
            <li>Meningkatkan kualitas SDM pemuda melalui pelatihan & kegiatan positif.</li>
            <li>Menggerakkan solidaritas sosial antarwarga.</li>
            <li>Mewujudkan dusun yang produktif dan inovatif.</li>
          </ul>
        </p>
      </section>
    </div>
  );
}

export default Home;
