$.ajax({
    url:'/api/getWeather',
    data:{
        zipcode:77777
    },
    success: function(result){
        $("#weather-temp").html
    }
});

//tem que ir brincando

function botao(){
    document.getElementById('nome').style.background="#7e459b";
    document.getElementById('nome').style.color="white";
    document.getElementById('nome').style.height="200px";
    document.getElementById('nome').style.width="200px";
    var minhaMusica= document.getElementById("h1");
    minhaMusica.innerText ="Vai e imprima para mim por favor";
}    