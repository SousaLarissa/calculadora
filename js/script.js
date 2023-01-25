let inserirResultado = document.getElementById("resultado");

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};

window.addEventListener ("load" , function (){
    atribuirEvento()
});

function atribuirEvento (){
    document.getElementById("btnValor1").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor0").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor2").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor3").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor4").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor5").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor6").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor7").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor8").addEventListener("click" , inserirNumero);
    document.getElementById("btnValor9").addEventListener("click" , inserirNumero);
    document.getElementById("btnPonto").addEventListener("click", inserirPonto);
    document.getElementById("btnSomar").addEventListener("click" , inserirOperador);
    document.getElementById("btnMultiplicar").addEventListener("click" , inserirOperador);
    document.getElementById("btnDividir").addEventListener("click" , inserirOperador);
    document.getElementById("btnPorcentagem").addEventListener("click" , inserirOperador);
    document.getElementById("btnSubtrair").addEventListener("click" , inserirOperador);
    document.getElementById("btnIgual").addEventListener("click" , resultado);
    document.getElementById("btnLimpa").addEventListener("click" , clear);
    document.getElementById("btnBack").addEventListener("click" , back);
}

function inserirNumero(){  
    if (isNaN(inserirResultado.value)){
        inserirResultado.value = event.target.textContent;
    } else{
    if (inserirResultado.value == 0) {
        inserirResultado.value = event.target.textContent;
    } else {
        inserirResultado.value += event.target.textContent;
    }
  } 
}
function soma (v1,v2) {
    return v1 + v2;
}

function subtrair (v1,v2) {
    return v1 - v2;
}

function multiplicar (v1,v2) {
    return v1 * v2;
}

function dividir (v1,v2) {
    return v1 / v2
}

function porcentagem (v1,v2) {
    return (v1 * v2) / 100;
}


function atribuirOperacao(operador){
if (operador == "+"){
    calculo.funcaoParaCalcular = soma;
} else if (operador == "-") {
    calculo.funcaoParaCalcular = subtrair;
} else if (operador == "*"){
    calculo.funcaoParaCalcular = multiplicar;
} else if (operador == "/"){
    calculo.funcaoParaCalcular = dividir;
} else {
    calculo.funcaoParaCalcular = porcentagem;
}
}

function inserirOperador (){

    if(!isNaN(inserirResultado.value)){
        if(calculo.valorSalvo == null) {
        calculo.valorSalvo = Number(inserirResultado.value);
    } else if (calculo.funcaoParaCalcular != null){
        calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inserirResultado.value));            
    }
    let operador = event.target.textContent;
    atribuirOperacao(operador);
    inserirResultado.value = operador;  
} 
}

function resultado(){
if(!isNaN(inserirResultado.value) && calculo.funcaoParaCalcular != null){
    let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inserirResultado.value));
    inserirResultado.value = resultado;
    calculo.valorSalvo = resultado;
    calculo.funcaoParaCalcular = null;
    }
}

function clear(){
inserirResultado.value = "";
calculo.valorSalvo = null;
calculo.funcaoParaCalcular = null;
}

function back(){
    var resultado = inserirResultado.value;
    inserirResultado.value = resultado.substring(0, resultado.length -1);
}

function inserirPonto(){
if(inserirResultado.value === "" || isNaN(inserirResultado.value)){
    inserirResultado.value = "0.";
} else if(!inserirResultado.value.includes(".")){
    inserirResultado.value = inserirResultado.value + ".";
}
}