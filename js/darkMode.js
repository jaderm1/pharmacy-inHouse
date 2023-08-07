
const darkBtn = document.getElementById('darkBtn');

const body = document.querySelector('body');


const card = document.querySelectorAll('.card');
const input = document.getElementsByClassName('form-control');

darkBtn.addEventListener('click', () => {

  card.forEach((item) => {

    item.classList.toggle('bg-secondary');
    item.classList.toggle('text-white');
  });
  botaoFavoritar.forEach((item) => {
    item.classList.toggle('btn-danger');
  });
  botaoAdicionar.forEach((item) => {
    item.classList.toggle('btn-success');
  });
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-white');

});