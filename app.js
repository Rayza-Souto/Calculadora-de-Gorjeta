const valorContaInput = document.getElementById('valorConta');
const gorjetaInput = document.getElementById('gorjeta');
const mensagemErro = document.getElementById('mensagemErro');

function calcularGorjeta() {
    mensagemErro.innerText = '';

    const valorConta = parseFloat(valorContaInput.value.replace(',', '.'));
    const porcentagem = parseFloat(gorjetaInput.value.replace(',', '.'));

    if (isNaN(valorConta) || valorConta <= 0) {
        mensagemErro.innerText = 'Informe um valor válido para a conta.';
        return;
    }

    if (isNaN(porcentagem) || porcentagem < 0) {
        mensagemErro.innerText = 'Informe uma porcentagem de gorjeta válida.';
        return;
    }

    const gorjeta = (valorConta * porcentagem) / 100;
    const total = valorConta + gorjeta;

    document.getElementById('valorGorjeta').innerText = `R$ ${gorjeta.toFixed(2)}`;
    document.getElementById('valorTotal').innerText = `R$ ${total.toFixed(2)}`;
}

document.getElementById('calcular').addEventListener('click', calcularGorjeta);
