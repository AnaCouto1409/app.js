escolhas.addEventListener('click', function(){    
});
//caixas adicionando o botão no input
decodificarRadio.addEventListener('click', function(){
    if(decodificarRadio.checked){
        btnDecodificar.style.display='flex';
        btnCodificar.style.display='none';
    }
    else{
        caixaFinal.style.display="none";
    }
});

//ligando funcões para codificar/decodificar
btnCodificar.addEventListener('click', function(){
    if(codificarRadio.checked){
        console.log("vambora");
    }
    else{
        console.log("molhou!!!!");
    }
});
function btnCodificar(){
    document.getElementById("#escolhas").style.background="#7e459b"
    var meuTitulo = document.querySelector("h1");
    meuTitulo.innerText ="Imprime ai para mim";
}


