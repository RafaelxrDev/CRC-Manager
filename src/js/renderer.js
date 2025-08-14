// renderer.js

const { ipcRenderer } = require('electron');

// 🔹 Associa o clique do botão à ação
document.addEventListener("DOMContentLoaded", () => {
  const btnGerador = document.getElementById('btn-gerador-doc');
  if (btnGerador) {
    btnGerador.addEventListener('click', () => {
      ipcRenderer.send('abrir-janela-gerador');
    });
  }

  const btnLaudo = document.getElementById('laudo');
  const modal = document.getElementById('modal-laudo');
  const fechar = document.getElementById('fecha-modal');

  if (btnLaudo) {
    btnLaudo.addEventListener('click', () => {
      modal.style.display = "block";
    });
  }

  if (fechar) {
    fechar.addEventListener('click', (e) => {
      e.preventDefault(); // evita envio de formulário
      modal.style.display = "none";
    });
  }
});
