export{}

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement
let campoSaldo = document.getElementById('campo-saldo');

let Saldo = '0'

function somarAoSaldo(soma:number) {
    let sumSaldo = Saldo += soma;
    campoSaldo.innerHTML = sumSaldo.toString();
}

function limparSaldo() {
    if (campoSaldo) {
      let clearSaldo=0
        campoSaldo.innerHTML = clearSaldo.toString();  
    }
    
}

botaoAtualizar?.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
    limparSaldo();
});