let hracNaTahu = 'circle';

const oznacPolicko = (event) => {
  if (hracNaTahu == 'circle') {
    event.target.classList.add('mrizka__pole--kolecko');
    document.querySelector('#hraje__img').src = 'img/cross.svg';
    hracNaTahu = 'cross';
    event.target.disabled = true;
  } else {
    event.target.classList.add('mrizka__pole--krizek');
    document.querySelector('#hraje__img').src = 'img/circle.svg';
    hracNaTahu = 'circle';
    event.target.disabled = true;
  }
};

document.querySelector('.btn1').addEventListener('click', oznacPolicko);
document.querySelector('.btn2').addEventListener('click', oznacPolicko);
document.querySelector('.btn3').addEventListener('click', oznacPolicko);
document.querySelector('.btn4').addEventListener('click', oznacPolicko);
document.querySelector('.btn5').addEventListener('click', oznacPolicko);
document.querySelector('.btn6').addEventListener('click', oznacPolicko);
document.querySelector('.btn7').addEventListener('click', oznacPolicko);
document.querySelector('.btn8').addEventListener('click', oznacPolicko);
document.querySelector('.btn9').addEventListener('click', oznacPolicko);
document.querySelector('.btn10').addEventListener('click', oznacPolicko);

const zeptejSe = (event) => {
  const potvrzeni = confirm('Opravdu chceš začít znovu?');
  if (potvrzeni != true) {
    event.preventDefault();
  }
};

document.querySelector('.btn__restart').addEventListener('click', zeptejSe);
