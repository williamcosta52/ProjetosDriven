function SelecaoCardapio (selecionadoverde) {

    const botaoanterior = document.querySelector('.escondido');

    if (botaoanterior !== null) {

        botaoanterior.classList.remove('escondido');

    }

    selecionadoverde.classList.add('escondido');

}
function cardapioBebida (selecionadobebida) {

    const bebidaAnterior = document.querySelector('.escondidobebida');

    if (bebidaAnterior !== null) {

        bebidaAnterior.classList.remove('escondidobebida');
    }

    selecionadobebida.classList.add('escondidobebida');

}
function cardapiosobremesa (selecionadosobremesa) {
    const sobreAnterior = document.querySelector('.escondidosobremesa');

    if (sobreAnterior !== null) {

        sobreAnterior.classList.remove('escondidosobremesa');
    }

    selecionadosobremesa.classList.add('escondidosobremesa');
}