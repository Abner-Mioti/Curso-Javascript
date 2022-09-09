document.querySelector('#exemplo'); // consigo fazer o mesmo que a aula 3 só com um comando, porém agora é necessario colocar igual no css # ou . entre outros, 
//um ponto também é que ele puxa o primeiro elemento e não todos
document.querySelector('.lista');

document.querySelectorAll('.lista'); // esse diferente dos de cima puxa todos ao inves do primeiro elemento

document.querySelector('button').innerHTML = 'Inscreva-se';

document.querySelectorAll('.lista')[1].innerHTML = 'Alterado!'; 
