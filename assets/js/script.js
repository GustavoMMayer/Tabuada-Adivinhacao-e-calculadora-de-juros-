document.querySelector('#submit').addEventListener("click",tabuada);
document.querySelector('#tabNumber').addEventListener("keyPress", tabuada);

function tabuada(){

    let number = document.querySelector('#tabNumber').value;
    let resposta = ""; 
    let rejex = /(0-9){1,}/;
    for(let i=1; i<=10;i++ ){ 
        resposta+= `${number}  x  ${i}  =  ${number*i}</br>`
    }
    
    document.querySelector('.tabuadaRes').innerHTML =`Abaixo a tabuada do numero: ${number } !!</br>${resposta}`;
    
}
// acerte o numero
document.querySelector('#play').addEventListener("click",inicializar);
document.querySelector('#send').addEventListener("click",acerteNumero);
let numero =0
let tentativas = 0
let numerosErrados = [];
function inicializar(){
    numero = parseInt(Math.random()*100);
    document.querySelector('#play').classList.add('oculto');
    document.querySelector('#send').classList.remove('oculto');
    
}

    function acerteNumero(){
        
        let palpite = document.querySelector('#palpite').value;
          
        tentativas ++
        numerosErrados.push(palpite);
        if(numero==palpite){
            document.querySelector('.pista').innerHTML=`<h1>PARABÈNS, após ${tentativas} tentativas você acertou!!!</h1><span>Tentativas: ${numerosErrados}<span>`;
             inicializar();
             44
        }else if( numero>palpite){
            document.querySelector('.pista').innerHTML='<h1>Numero sorteado é MAIOR, tente novamente!!</h1>';
            
            
        }else{
            document.querySelector('.pista').innerHTML='<h1>Numero sorteado é MENOR, tente novamente!!</h1>';
                       
        }
        palpite = document.querySelector('#palpite').value="";
    
    }

    // Calculos de juros
    
    document.querySelector("#calcular").addEventListener('click', calcular);
function calcular(){
    let c = document.querySelector('#c').value;
    let i = document.querySelector('#i').value;
    let t = document.querySelector('#t').value;
    let m = 0;
    console.log(c);
    console.log(i);
    console.log(t);
    console.log(m);
    m = (c*((1+(i/100))**t));
    
    document.querySelector(".resultado").innerHTML =`Montante é: R$ ${m.toFixed(2)}`;
    document.querySelector('.resultado').classList.remove('oculto');
}
