// src/js/app.js

function mostrarPagina(paginaId) {
    const paginas = document.querySelectorAll(".pagina");
    paginas.forEach(pagina => {
      pagina.style.display = "none";
    });
  
    const paginaAtiva = document.getElementById(paginaId);
    if (paginaAtiva) {
      paginaAtiva.style.display = "block";
    }
  }
  