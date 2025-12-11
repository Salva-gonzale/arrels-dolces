"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomeE() {
  // Imágenes del slider dentro de la tarjeta
  const images = [
    "/galleta1.png",
    "/galleta2.png",
    "/galleta3.png",
    "/galleta4.png",
    "/imagen5.png",
    "/imagen6.png",
    "/producto123.png",
  ];

  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <main className="page-container">
      {/* HEADER */}
      <header className="site-header">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/logo_arrdols1.png"
            alt="Jingle Sweets by Arrels Dolces"
            width={80}
            height={80}
            className="logo-img"
            priority
          />
        </div>

        {/* Menú de navegación */}
        <nav className="main-nav">
          {/* lleva al inicio de la página */}
          <a href="#top">Producto</a>
        </nav>

        {/* Correo */}
        <div className="header-actions">
          <span className="phone">
            <p>arrelsdolces@gmail.com</p>
          </span>
          <button className="icon-button" aria-label="Correo">
            ✉️
          </button>
        </div>
      </header>

      {/* Ancla superior para “Producto” */}
      <div id="top" />

      {/* LÍNEA SEPARADORA */}
      <div className="header-divider" />

      {/* CONTENIDO CENTRAL */}
      <section className="content-wrapper">
        <h1 className="section-title">Arrels Dolçes</h1>

        <p className="section-description">
          Presentamos una propuesta selecta y bien equilibrada, donde incorporamos 
          nuevas variedades de galletas con sabores intensos y claramente diferenciadores. 
          A esta selección sumamos nuestras pastas artesanas, perfectas para quedar bien en 
          cualquier ocasión, y las inconfundibles Delicias de Tolosa, que no podían faltar para 
          completar una oferta única y realmente especial.
        </p>
      </section>

      {/* SECCIÓN PRODUCTO DESTACADO */}
      <section className="products-section">
        {/* Rombo */}
        <div className="products-ornament" />

        {/* Tarjeta centrada con slider */}
        <div className="product-showcase">
          <article className="product-card">
            {/* Flecha izquierda */}
            <button className="arrow-btn left" onClick={prevImage}>
              ❮
            </button>

            {/* Imagen del producto (slider) */}
            <div className="product-image-wrapper">
              <Image
                src={images[index]}
                alt={`Selección de Galletas 200g - imagen ${index + 1}`}
                fill
                className="product-image"
              />
            </div>

            {/* Flecha derecha */}
            <button className="arrow-btn right" onClick={nextImage}>
              ❯
            </button>

            <h4 className="product-name">CAJA 6 UNIDADES</h4>
            <p className="product-weight">Unidad 2'45€</p>
            <p className="product-price">9,99 €</p>

            {/* BOTÓN CON ALERTA */}
            <button
              className="product-button"
              onClick={() =>
                alert("Envia un correo a arrelsdolces@gmail.com Indicanos cual de nuestros productos quieres, si ")
              }
            >
              Haz tu pedido
            </button>
          </article>
        </div>
      </section>
    </main>
  );
}
