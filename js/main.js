// T.R.A.U.D.E. TOUR — comportamiento del sitio (sin dependencias externas)

document.addEventListener("DOMContentLoaded", () => {
  const encabezado = document.querySelector(".encabezado");
  const botonMenu = document.querySelector(".boton-menu");
  const navPrincipal = document.querySelector(".nav-principal");

  // Sombra del header al scrollear
  const alScrollear = () => {
    if (window.scrollY > 12) {
      encabezado.classList.add("con-sombra");
    } else {
      encabezado.classList.remove("con-sombra");
    }
  };
  window.addEventListener("scroll", alScrollear);
  alScrollear();

  // Menú móvil
  if (botonMenu && navPrincipal) {
    botonMenu.addEventListener("click", () => {
      navPrincipal.classList.toggle("abierto");
    });
    navPrincipal.querySelectorAll("a").forEach((enlace) => {
      enlace.addEventListener("click", () => navPrincipal.classList.remove("abierto"));
    });
  }

  // Animación de aparición al hacer scroll
  const elementos = document.querySelectorAll(".aparecer");
  if ("IntersectionObserver" in window && elementos.length) {
    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
            observador.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    elementos.forEach((el) => observador.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add("visible"));
  }
});
