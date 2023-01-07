let selecionadoprato;
let icone;

function SelecaoCardapio(selecionadoverde) {
  const botaoanterior = document.querySelector(".escondido");

  if (botaoanterior !== null) {
    botaoanterior.classList.remove("escondido");
  }

  selecionadoverde.classList.add("escondido");

  selecionadoprato = selecionadoverde.innerHTML;

  const ion = selecionadoverde.querySelector("ion-icon");
  if (icone !== undefined && icone.style.opacity === "1") {
    icone.style.opacity = 0;
  }
  ion.style.opacity = 1;
  icone = ion;
  verificarPratoSelecionado();
} // <-- aqui termina a função SelecaoCardapio

let selecionadabebida;
let iconeBebida;

function cardapioBebida(selecionadobebida) {
  const bebidaAnterior = document.querySelector(".escondidobebida");

  if (bebidaAnterior !== null) {
    bebidaAnterior.classList.remove("escondidobebida");
  }

  selecionadobebida.classList.add("escondidobebida");

  selecionadabebida = selecionadobebida.innerHTML;

  const ion = selecionadobebida.querySelector("ion-icon");
  if (iconeBebida !== undefined && iconeBebida.style.opacity === "1") {
    iconeBebida.style.opacity = 0;
  }
  ion.style.opacity = 1;
  iconeBebida = ion;

  verificarPratoSelecionado();
} // <-- aqui termina a função cardapioBebida

let selecionadasobremesa;
let iconeSobremesa;

function cardapiosobremesa(selecionadosobremesa) {
  const sobreAnterior = document.querySelector(".escondidosobremesa");

  if (sobreAnterior !== null) {
    sobreAnterior.classList.remove("escondidosobremesa");
  }

  selecionadosobremesa.classList.add("escondidosobremesa");

  selecionadasobremesa = selecionadosobremesa.innerHTML;

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
    const botaoverde = document.querySelector(".botao");

    botaoverde.innerHTML = "Fechar Pedido";

    botaoverde.classList.add("botaopedido");
  }
}
function ativarBotaoComprar(ativarbotaoverde) {
  if (
    selecionadoprato !== undefined &&
    selecionadabebida !== undefined &&
    selecionadasobremesa !== undefined
  ) {
  }
}
