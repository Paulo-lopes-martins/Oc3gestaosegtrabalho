// Adicione o evento de clique ao botão
document.getElementById('botao-voltar-ao-topo').addEventListener('click', function() {
  // Use o método scrollTo para voltar ao topo da página
  window.scrollTo({ top: 0, behavior: 'smooth' });
});