let a =['SEGUNDA','TERÇA','QUARTA','QUINTA','SEXTA'];
let b =['SABADO','DOMINGO'];

let x = '';

while(true){
x = prompt('Qual seu dia da semana preferido?');

x = x.toUpperCase();

if (x) { 

if(b.includes(x)){
    alert('Bom fim de semana!');
}
else if(a.includes(x)){
    alert('Boa semana!');
}
else {
    alert('Por favor, insira um dia da semana.');
}
}
}