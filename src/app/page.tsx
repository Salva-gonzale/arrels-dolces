"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="page-container">
      {/* HEADER */}
      <header className="site-header">
        {/* Logo */}
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Jingle Sweets by Arrels Dolces"
            width={80}
            height={80}
            className="logo-img"
            priority
          />
        </div>

        {/* Menú de navegación */}
        <nav className="main-nav">
          <a href="#">Producto</a>
          <a href="#">Empresa</a>
          <a href="#">Contacto</a>
        </nav>

        {/* Teléfono + iconos */}
        <div className="header-actions">
          <span className="phone">
            <p>arrelsdolces@gmail.com</p>
          </span>
          <button className="icon-button" aria-label="Correo">
            ✉️
          </button>
        </div>
      </header>

      {/* LÍNEA SEPARADORA */}
      <div className="header-divider" />

      {/* CONTENIDO CENTRAL */}
      <section className="content-wrapper">
        <h1 className="section-title">Arrels Dolçes</h1>

        <p className="section-description">
          Presentamos una selecta y equilibrada propuesta, en la que combinamos
          nuevas propuestas de galletas extraordinariamente diferentes, que
          destacan por ser sabores intensos. Añadimos una selección de pastas
          artesanas para quedar bien en cualquier situación y nuestras clásicas
          y originales Delicias de Tolosa, que no podían faltar para completar
          una oferta muy diferente y especial.
        </p>
      </section>

      {/* SECCIÓN PRODUCTO DESTACADO */}
      <section className="products-section">
        {/* Rombo */}
        <div className="products-ornament" />

        {/* Tarjeta centrada */}
        <div className="product-showcase">
          <article className="product-card">
            <div className="product-image-wrapper">
              <Image
                src="/producto.png"
                alt="Selección de Galletas 200g"
                fill
                className="product-image"
              />
            </div>

            <h4 className="product-name">Selección de Galletas 200g</h4>
            <p className="product-weight">200 g/ud.</p>
            <p className="product-price">9,99 €</p>

            {/* BOTÓN CON ALERTA */}
            <button
              className="product-button"
              onClick={() =>
                alert("Envia un correo a arrelsdolces@gmail.com")
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
