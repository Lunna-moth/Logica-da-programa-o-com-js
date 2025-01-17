let x = prompt('Voce ja jogou?');

x = x.toLowerCase(x);

let a = ['sim', 's', 'yes', 'y'];
let b = ['não', 'n', 'no', 'n'];

if(a.includes(x)){
    let y = prompt('qual sua pontuação?');
    y = parseInt(y);
    if(y >= 100){
        alert('Parabéns, você venceu!');
    }
    else{
        alert('Tente novamente para ganhar.')
    }
}

if(b.includes(x)){
    alert('joguei o jogo')
}