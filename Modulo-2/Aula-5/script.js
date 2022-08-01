let carro = {
    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',

    ligar:function(){
        console.log("VRUM VRUM!");
    },

    acelerar:function(){
        console.log("Riiiiiiihhhih")
    }
};

console.log( carro['nome'] );
console.log( carro.nome );
console.log("Modelo: " + carro.modelo );

document.getElementById("titulo").style.display = "block"; 

carro.ligar();
carro.acelerar();