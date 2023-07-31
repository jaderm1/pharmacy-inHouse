// Ex1 - [header] Adicionar Informações do Header

// Em JavaScript que selecione o elemento do header. Em seguida, adicione dinamicamente as informações do header

// (Informações da logo e opções de menu)

// Sugestão: Crie um objeto em Javascript com informações da logo e uma lista de opções de menu.



const header = document.querySelector('header');

const nav = document.querySelector('nav');

const headerElements = {
  src: 'img/logo.png',
  alt: 'Logo da farmácia',
  title: 'PharmacyInHouse',
  img: 'img/logo.png',

}

const menus =[{
  menu: 'Home',
  index: 'index.html'
}
,{
  menu: 'Contato',
  index: 'contato.html'
},
{
  menu: 'Sobre nós',
  index: ''
},
]






nav.innerHTML +=

  `
<a class="navbar-brand" href="#">
  <img src=${headerElements.img} width="60" height="60" class="d-inline-block align-top" alt="">
  <p id="logoEscrito" class="d-inline-block ">${headerElements.title}</p>
</a>

`


menus.map((item) => {
  
  nav.innerHTML += `
  <li class="nav-item ">
   <a class="nav-link" href="${item.index}" class="nav-link">${item.menu}</a>
 </li>
 `

 })



