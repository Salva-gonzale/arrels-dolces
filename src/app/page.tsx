"use client";

import Image from "next/image";

export default function HomeE() {
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

          {/* hace scroll a la sección Empresa */}
          <a href="#empresa">Empresa</a>

          {/* de momento lo dejamos como ancla vacía o lo puedes apuntar a otra sección */}
          <a href="#contacto">Contacto</a>
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