import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2 (1).jpg",
    "/img3 (1).jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];
  return (
    <section className="gallery">
      <h1>PRACTICE BEATS BETTER</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((el, index) => (
            <img key={index} src={el} alt="gallery images" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 5).map((el, index) => (
            <img key={index} src={el} alt="gallery images" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((el, index) => (
            <img key={index} src={el} alt="gallery images" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
