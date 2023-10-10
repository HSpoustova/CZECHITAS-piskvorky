import { findWinner } from 'https://unpkg.com/piskvorky@0.1.4';

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

  vyhodnot();
};

const vsechnaPolicka = document.querySelectorAll('.btn');
vsechnaPolicka.forEach((policko) => {
  policko.addEventListener('click', oznacPolicko);
});

const vyhodnot = () => {
  let herniPole = [];
  vsechnaPolicka.forEach((policko) => {
    if (policko.classList.contains('mrizka__pole--kolecko')) {
      herniPole.push('o');
    } else if (policko.classList.contains('mrizka__pole--krizek')) {
      herniPole.push('x');
    } else {
      herniPole.push('_');
    }
  });

  const vitez = findWinner(herniPole);

  if (vitez === 'o' || vitez === 'x') {
    setTimeout(() => {
      alert(`Vyhrál hráč se symbolem ${vitez}.`);
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  if (vitez === 'tie') {
    setTimeout(() => {
      alert(`Hra skončila remizou.`);
    }, 1000);
    setTimeout(() => {
      location.reload();
    }, 2000);
  }
};

const zeptejSe = (event) => {
  const potvrzeni = confirm('Opravdu chceš začít znovu?');
  if (potvrzeni != true) {
    event.preventDefault();
  }
};

document.querySelector('.btn__restart').addEventListener('click', zeptejSe);
