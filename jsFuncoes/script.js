//Exercicio 1
function calcularMedia(){
    var p1 = Number(document.getElementById('p1').value);
    var p2 = Number(document.getElementById('p2').value);
    var media = (p1 + p2) / 2;
    document.getElementById('labelResultadoP1P2').innerHTML = 'A média é de: ' + media
}

//Exercicio 2
function calculoExer2(){
    let x = Number(window.prompt('Coloque o valor da Base(x): '));
    let y = Number(window.prompt('Coloque o valor do Expoente(y): '));
    let resultaExer2 = Math.pow(x, y);
    window.alert("Resultado: "+ resultaExer2);
}

//Exercicio 3
function calculoExer3(){
    let array = [10, 4, 5];
    let menorArray = Math.min(...array);
    document.getElementById('resultadoExer3').innerHTML = `O menor valor entre os 3 do array é: ${menorArray}`;
}

//Exercicio 4, 5 e 6
let dados = {
    marca: "HP",
    modelo: "V15",
    config: {
        memoria: 8,
        processador: "i7"
    },
    falar: function(){
        alert(`O modelo é um ${this.marca}, e seu processador: ${this.config.processador}`);
    }
};

function botaoFalar(){
    dados.falar()
}
let {modelo, config:{processador}} = dados;
document.getElementById('resultadoExer4').innerHTML = `Modelo: ${modelo}, Processador: ${processador}`

//Exercicio 7
let novoEquip = {
    ...dados,
    valorVenda: 1400,
    qtdEstoque: 13
};

console.log(novoEquip)

//Exercicio 8
let X = [15, 25];
let Y = [12, 15, 23, 43];

let novoY = Y.join("-");
console.log(novoY);

let Z = [...X, ...Y];
console.log(Z);

Z.forEach(elementos =>{
    let resultadoExer8 = elementos * 5;
    console.log(`R: ${resultadoExer8}`)
})