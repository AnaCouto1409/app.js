var resultado=document.querySelector("#resultado");

var btnDecodificar=document.querySelector("#criptografar");
var btnCodifocar=document.querySelector("#Decriptografar");

solucionando.addEventListener('change', function(){
    if(selecionado.value==="cifra"){
        ocultar.style.display = "block";
        document.querySelector("body").style.backgroundColor="#7e459b"; //document
        document.querySelector("#digite").style.width="50px";
        document.querySelector("#resultado").style.heigth="100px";
    } else{
        ocultar.style.display='none';
        document.querySelector("body").style.background="#7e459b";
        document.querySelector("#digite").style.width="100px";
        document.querySelector("body").style.height="50px";  
    }
});

//DOCUMENT 
enviar.addEventListener('click', function(){
    var texto=digite.value;
    if(criptografar.checked){
        if(selelcionado.value =='cifra'){ 
            resultado.value = cifraCesar(texto);
        }else{
            resultado.value=base64(texto);// pegarria o valor  digitado e converteria  em CifraCesar
        }
    }
});


                             


















