document.addEventListener("DOMContentLoaded", () => {
    const btnGerarDoc = document.getElementById("btn-gerar-doc");
    const btnEstoque = document.getElementById("btn-estoque");
    const conteudo = document.getElementById("conteudo-principal");
  
    btnGerarDoc.addEventListener("click", () => {
      conteudo.innerHTML = "<h2>📄 Gerador de Documentos</h2><p>Em construção...</p>";
    });
  
    btnEstoque.addEventListener("click", () => {
      conteudo.innerHTML = "<h2>📦 Gerenciador de Estoque</h2><p>Em construção...</p>";
    });
  });
  