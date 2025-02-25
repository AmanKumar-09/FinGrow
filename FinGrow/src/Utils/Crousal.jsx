import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import crousel1 from '../assets/img/loan-image-1.webp'
import crousel2 from '../assets/img/loan-image-2.png'
import crousel3 from '../assets/img/loan-image-3.jpg'
import crousel4 from '../assets/img/loan-image-1.webp'

function Carousel() {
  return (
    <div id="carouselExampleAutoplaying" className="carousel slide  pt-[100px]" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={crousel1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={crousel2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={crousel3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={crousel4} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
