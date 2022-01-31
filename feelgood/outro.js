//DEUS CUIDA DE MIM

//$ e sempre sinal do JQuery

$.ajax({
    url:'/api/getWeather/api',
        data:{
            zipcode: 777777
        },
            success:function(result){
                $("#weather-temp").html("<strong>" + result +"</strong> degrees")
            }
});

//questão 2 - usar o factory
function fabricaFactory(){
    return {
 "bola da copa"
var baba = "bola normal"
}

}
//questao 2

var jabulani =fabricaDeBolas("bola da copa")
var baba = fabricaDeBolas("bola normal")

//questão 3
function fabricaDeBolas(bola){
    var objeto= {
        tipo: bola,
        getTipo: function(){
            return this.tipo
        },
        setTipo: function(bola){
            this.tipo=bola
        }
    }
    return objeto
}
function recompensa(boletim1, boletim2, boletim3){
    var valor1=0
    var valor2=0
    var valor3=0
    var filho =""
    for(var i in boletim1){
        valor1 += boletim1[i]
    }
    for(var i in boletim2){
        valor1 += boletim2[i]
    }
    for(var i in boletim3){
        valor1 += boletim3[i]
    }
    
    if(valor1==valor2||valor2==valor3||valor1==valor3){
        filho='A bicicleta será dividida.'
    }
    else if (valor1>valor2 && valor3){
        filho="Eu preciso comprar a primeira bicicleta para meu filho"
    }
    else if (valor2>valor1&& valor3){
        filho="Eu preciso comprar uma bicicleta para meu terceiro filho"
    }
    return filho
}


//questao 4
function recompensa(boletim1, boletim2, boletim3) {
    function recompensa(boletim1, boletim2, boletim3){
        var valor1=0
        var valor2=0
        var valor3=0
        var filho =""
        for(var i in boletim1){
            valor1 += boletim1[i]
        }
        for(var i in boletim2){
            valor2 += boletim2[i]
        }
        for(var i in boletim3){
            valor3 += boletim3[i]
        }
        
        if(valor1 == valor2 || valor2 == valor3 || valor1 == valor3){
            filho="A bicicleta será dividida."
        } else if (valor1 >valor2 && valor3){
            filho="Eu preciso comprar uma bicicleta para meu primeiro filho."
        }
       else if (valor2 >valor1 && valor3){
            filho="Eu preciso comprar uma bicicleta para meu segundo filho."
        }
        else if (valor2 >valor1 && valor3){
            filho="Eu preciso comprar uma bicicleta para meu terceiro filho."
        }
        return filho
    }
    }

//outro codigo js

function recompensa(boletim1, boletim2, boletim3){
    var valor1 = 0
    var valor2 = 0
    var valor3 = 0
    var filho = ""
    for( var i in boletim1){
        valor1 += boletim1[i]
    }
    for( var i in boletim2){
        valor2 += boletim2[i]
    }
    for( var i in boletim3){
        valor3 += boletim3[i]
    }
    if(valor1 == valor2 || valor2 == valor3 || valor1 == valor3){
        filho = "A bicicleta será dividida."
    }else if( valor1 > valor2 && valor3){
        filho="Eu preciso comprar uma bicileta para meu orimeiro filho."
    }else if( valor2 > valor1 && valor3){
        filho= "Eu preciso comprar uma bicicleta para meu segundo filho"
    } else if(valor2 >valor1 && valor3){
        filho="Eu preciso comprar uma bicileta para meu terceiro filho"
    }
    return filho
}

















