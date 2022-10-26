
const calcular = document.getElementById("calcular")


function imc (){

    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");
   
    if (nome, altura, peso !== ''){

        const valorImc = (peso /(altura * altura) ).toFixed(1);

        let classificacao = '';

        if (valorImc < 18.5){
            classificacao = 'Abaixo do peso!';
        }else if (valorImc < 25) {
            classificacao = 'Com peso ideal Parabens!';
        }else if (valorImc < 30) {
            classificacao = 'Levemente acima do peso';
        }else if (valorImc < 35) {
            classificacao = 'Voce está com obesidade grau 1!';
        }else if (valorImc < 35) {
            classificacao = 'Voce está com obesidade grau 2!!';
        }else  {
            classificacao = 'Voce está com obesidade grau 3, cuidado!!!';
        }

        resultado.textContent = `${nome} Seu IMC é ${valorImc} e vc está ${classificacao}`;  
    }else {
        resultado.textContent = 'Preencha todos os campos!'
    
    }
}
    


calcular.addEventListener('click', imc);