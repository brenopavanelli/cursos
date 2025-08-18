const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector(('.iniciar'));
const pausar = document.querySelector(('.pausar'));
const zerar = document.querySelector(('.zerar'));

iniciar.addEventListener('click', function(event){
    window.alert('Iniciou!'); 
});

pausar.addEventListener('click', function(event){
    window.alert('Pausou');
});

zerar.addEventListener('clcik', function(event){
    window.alert('Zerou!');
})



