document.addEventListener("DOMContentLoaded", () => {
    const conteudo = document.getElementById("conteudo-principal");
  
    // Mapeamento de botões e seus conteúdos
    const botoes = {
      "btn-gerador-doc": `
        <h2>📄 Gerador de Documentos</h2>
        <p>Aqui você poderá gerar automaticamente os documentos do CRC.</p>
        <!-- Formulário ou opções do gerador podem entrar aqui futuramente -->
      `,
      "btn-estoque": `
        <h2>📦 Estoque</h2>
        <p>Gerencie os itens cadastrados, veja entradas e saídas.</p>
      `,
      "btn-parque-maquinas": `
        <h2>🏭 Parque de Máquinas</h2>
        <p>Cadastro, controle e atualização de máquinas do CRC.</p>
      `,
      "btn-laudos": `
        <h2>🧪 Laudos Técnicos</h2>
        <p>Visualize ou cadastre laudos técnicos realizados.</p>
      `,
      "btn-impressoras": `
        <h2>🖨️ Impressoras</h2>
        <p>Gerencie impressoras disponíveis e seus status.</p>
      `,
    };
  
    // Adiciona eventos aos botões
    Object.keys(botoes).forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener("click", () => {
          conteudo.innerHTML = botoes[id];
        });
      }
    });
  });
  