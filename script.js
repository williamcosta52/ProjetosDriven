let selecionadoprato;
let selecionadabebida;
let selecionadasobremesa;
let iconeBebida;
let iconeSobremesa;
let icone;
let valorTotal = 0;

let pedidos = [];

function SelecaoCardapio(selecionadoverde) {
  const botaoanterior = document.querySelector(".escondido");

  if (botaoanterior !== null) {
    botaoanterior.classList.remove("escondido");
  }

  selecionadoverde.classList.add("escondido");

  selecionadoprato = 1;

  const ion = selecionadoverde.querySelector("ion-icon");
  if (icone !== undefined && icone.style.opacity === "1") {
    icone.style.opacity = 0;
  }
  ion.style.opacity = 1;
  icone = ion;
  verificarPratoSelecionado();
} // <-- aqui termina a função SelecaoCardapio

function cardapioBebida(selecionadobebida) {
  const bebidaAnterior = document.querySelector(".escondidobebida");

  if (bebidaAnterior !== null) {
    bebidaAnterior.classList.remove("escondidobebida");
  }

  selecionadobebida.classList.add("escondidobebida");

  selecionadabebida = 1;

  const ion = selecionadobebida.querySelector("ion-icon");
  if (iconeBebida !== undefined && iconeBebida.style.opacity === "1") {
    iconeBebida.style.opacity = 0;
  }
  ion.style.opacity = 1;
  iconeBebida = ion;

  verificarPratoSelecionado();
} // <-- aqui termina a função cardapioBebida

function cardapiosobremesa(selecionadosobremesa) {
  const sobreAnterior = document.querySelector(".escondidosobremesa");

  if (sobreAnterior !== null) {
    sobreAnterior.classList.remove("escondidosobremesa");
  }

  selecionadosobremesa.classList.add("escondidosobremesa");

  selecionadasobremesa = 1;

  const ion = selecionadosobremesa.querySelector("ion-icon");
  if (iconeSobremesa !== undefined && iconeSobremesa.style.opacity === "1") {
    iconeSobremesa.style.opacity = 0;
  }
  ion.style.opacity = 1;
  iconeSobremesa = ion;

  verificarPratoSelecionado();
} // <-- aqui termina a função cardapiosobremesa

function verificarPratoSelecionado() {
  if (
    selecionadoprato !== undefined &&
    selecionadabebida !== undefined &&
    selecionadasobremesa !== undefined
  ) {
    const botaoverde = document.querySelector(".menu-inferiorVerde");

    botaoverde.classList.remove("botaoescondido");
  }
}

function calcularpreco() {
  const precoprato = document.querySelector(
    ".cardapios  .escondido  span"
  ).innerHTML;

  const precobebida = document.querySelector(
    ".cardapios .escondidobebida span"
  ).innerHTML;

  const precosobremesa = document.querySelector(
    ".cardapios .escondidosobremesa span"
  ).innerHTML;

  valorTotal = (
    Number(precoprato.replace(",", ".")) +
    Number(precobebida.replace(",", ".")) +
    Number(precosobremesa.replace(",", "."))
  ).toFixed(2);
}
function titulosPedido() {
  const nomeprato = document.querySelector(
    ".cardapios .escondido h2"
  ).innerHTML;

  const nomebebida = document.querySelector(
    ".cardapios .escondidobebida h2"
  ).innerHTML;

  const nomesobremesa = document.querySelector(
    ".cardapios .escondidosobremesa h2"
  ).innerHTML;

  pedidos.push(nomeprato);
  pedidos.push(nomebebida);
  pedidos.push(nomesobremesa);
}
function chamarZap() {
  calcularpreco();
  titulosPedido();
  let url = `Olá, gostaria de fazer o pedido:
  - Prato: ${pedidos[0]}
  - Bebida: ${pedidos[1]}
  - Sobremesa: ${pedidos[2]}
  Total: R$ ${valorTotal.replace(".", ",")}`;

  let whats = "https://wa.me/?text=" + encodeURIComponent(url);
  return (window.location = whats);
}
