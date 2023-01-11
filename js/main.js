//ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
};

links.forEach(ativarLink);



//ativar itens do orcamento
const parametros = new URLSearchParams(location.search);

function ativarProdutos(parametro) {
  const elemento = document.getElementById(parametro)
  if(parametro){
    elemento.checked = true;
  } else {
    return
  }
}
parametros.forEach(ativarProdutos)


// perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button")

function ativarPergunta(event){
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls)
  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains("ativa")
  pergunta.setAttribute('aria-expanded', ativa)
}

function eventosPergunta(pergunta) {
  pergunta.addEventListener("click", ativarPergunta)
}

perguntas.forEach(eventosPergunta)


// galeria de bicicleta
const galeria = document.querySelectorAll(".bicicleta-imagens img")
const galeriaContainer = document.querySelector(".bicicleta-imagens")

function trocaImagem(event) {
  const img = event.currentTarget
  const media = matchMedia('(min-width: 1000px)').matcher
  if(media) {
    galeriaContainer.prepend(img)
  }
}

function eventosGaleria(img) {
  img.addEventListener('click', trocaImagem)
}

galeria.forEach(eventosGaleria)

// animação
if(window.SimpleAnime){
  new SimpleAnime();
}