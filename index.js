const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
 
  event.preventDefault();

  const peso = document.querySelector("#peso").value;

  const altura = document.querySelector("#altura").value;

  const imcCalc = (peso / (altura * altura)).toFixed(2);
  const value = document.querySelector("#value");

  document.querySelector("#info").classList.remove("hider");

  let descricao = '';

  value.classList.remove('normal', 'atencao');


  if (imcCalc < 18.5) {
    descricao = 'Cuidado ! Você está Abaixo do peso';
    value.classList.add('normal'); 
  } 
  else if (imcCalc >= 18.5 && imcCalc <= 25) {
    descricao = 'Você está no peso Ideal';
    value.classList.add('normal'); 
  } 
  else if (imcCalc > 25 && imcCalc <= 30) {
    descricao = 'Cuidado! Você está com Sobrepeso';
    value.classList.add('atencao'); 
  } 
  else if (imcCalc > 30 && imcCalc <= 35) {
    descricao = 'Cuidado! Você está com Obesidade Moderada';
    value.classList.add('atencao'); 
  } 
  else if (imcCalc > 35 && imcCalc <= 40) {
    descricao = 'Cuidado! Você está com Obesidade Severa';
    value.classList.add('atencao'); 
  } 
  else {
    descricao = 'Cuidado! Você está com Obesidade Morbida';
    value.classList.add('atencao'); 
  }

  value.textContent = imcCalc.replace('.', ',');

  document.querySelector('#descricao').textContent = descricao;
});
