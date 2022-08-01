let carro = {

    nome:'Fiat',
    modelo:'Uno',
    peso:'800kg',
    ligado: false,

    ligar:function(){
        this.ligado = true;
        console.log("VRUM VRUM!");
    },

    acelerar:function(){
        if(this.ligado == true){
            console.log("Riiiiiiihhhih");
        } else {
            console.log(this.nome + "" + this.modelo + "Carro não está ligado!")
        }
        
    }
};

console.log("Modelo: " + carro.modelo );

carro.ligar();
carro.acelerar();

let carros = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo: 'Corolla'},
    {nome: 'Toyota', modelo: 'Corolla'},

]

console.log(carros);
console.log(carros[2].modelo);
console.log(carros[3]);
