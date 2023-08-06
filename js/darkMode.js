
const darkBtn = document.getElementById('darkBtn');

const body = document.querySelector('body');


const card = document.querySelectorAll('.card');
const input = document.getElementsByClassName('form-control');

darkBtn.addEventListener('click', () => {
  alert('teste')

  card.forEach((item) => {

    item.classList.toggle('bg-secondary');
    item.classList.toggle('text-white');
  });
  botaoFavoritar.forEach((item) => {
    item.classList.remove('btn-outline-danger');
    item.classList.add('btn-danger');
  });
  botaoAdicionar.forEach((item) => {
    item.classList.remove('btn-outline-success');
    item.classList.add('btn-success');
  });
  body.classList.toggle('bg-dark');
  body.classList.toggle('text-white');

});