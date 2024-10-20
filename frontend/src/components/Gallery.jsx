import React from "react";

const Gallery = () => {
  const gallery = [
    "/a.jpg",
    "/b.jpg",
    "/c.jpg",
    "/d.jpg",
    "/h.jpg",
    "/f.jpg",
    "/g.jpg",
    "/e.jpg",
  ];
  return (
    <section className="gallery">
      <h1>BETTER BEATS BEST</h1>
      <div className="images">
        <div>
          {gallery.slice(0, 3).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(3, 6).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        <div>
          {gallery.slice(6, 9).map((element, index) => (
            <img key={index} src={element} alt="galleryImage" />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;