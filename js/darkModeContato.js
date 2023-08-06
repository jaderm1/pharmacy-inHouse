 
 const darkBtnContato = document.getElementById('darkBtnContato');
const input = document.querySelectorAll('.form-control');
 body = document.querySelector('body');


 darkBtnContato.addEventListener('click', () => {
    alert('teste')
    input.forEach((item) => {
         item.classList.toggle('bg-dark');
         item.classList.toggle('text-white');
    });
    body.classList.toggle('bg-dark');
 });