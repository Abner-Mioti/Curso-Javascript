function digitou(evente){
    console.log(evente);
}

function digitado(evente){
    if(evente.keyCode == 13){ // Tecla Enter
       let texto = document.getElementById("campo").value;

       console.log(texto);
    }
}

function digitados(evente){
    if(evente.keyCode == 13 && evente.ctrlKey == true){ // Tecla Enter
       let texto = document.getElementById("campo").value;

       console.log(texto);
    }
}