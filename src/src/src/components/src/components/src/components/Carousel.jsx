import React, { useState } from "react";

const images = [
  "https://picsum.photos/800/300?random=1",
  "https://picsum.photos/800/300?random=2",
  "https://picsum.photos/800/300?random=3",
];

function Carousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <img src={images[index]} alt="carousel" width="800" height="300" style={{ borderRadius: "10px" }} />
      <div>
        <button onClick={prev}>◀️</button>
        <button onClick={next}>▶️</button>
      </div>
    </div>
  );
}

export default Carousel;
