// Ex2 - [pagina-todos-medicamentos] Adicionar Lista de medicamentos

// Na página de todos os medicamentos, crie uma lista de medicamentos utilizando JavaScript para criar elementos do DOM dinamicamente. Os medicamentos devem ser exibidos em cards, contendo título, imagem, valor e um botão de adicionar ao carrinho.

// Sugestão: Crie uma lista de objetos  em Javascript com informações de cada card


const remedios =[{
    nome: 'NEOSALDINA DIPIRONA 300MG',
    valor: 'R$ 21,90',
    img: 'https://precopopular.vteximg.com.br/arquivos/ids/183480-1000-1000/30495_0.jpg?v=637806088115400000',
    alt: 'Remédio Neosaldina',

},
{
    nome: 'Engov com 4 Comprimidos',
    valor: 'R$16,99',
    img :'https://precopopular.vteximg.com.br/arquivos/ids/183715-400-400/726880_0.jpg?v=637806271221000000',
    
},{
    nome:'NOVALGINA XAROPE 100ML',
    valor:'R$ 37,43',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/183626-400-400/31459_0.jpg?v=637806245448600000',
},{
    nome:'LISADOR DIP 1G 20 COMPRIMIDOS',
    valor:'R$ 27,90',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/196015-400-400/732595_0.jpg?v=638024030818930000',
},{
    nome:'DORALGINA COM 20 DRÁGEAS',
    valor:'R$ 9,99',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/172575-400-400/686723.jpg?v=637967865338530000',
},{
    nome:'Sonrisal (GSK)',
    valor:'R$ 8,99',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/197826-400-400/508367_0.jpg?v=638064632766670000',
},{
    nome:'DORIL COM 6 COMPRIMIDOS',
    valor:'R$ 8,32',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/183580-400-400/700121_0.jpg?v=637806150767630000',
},{
    nome:'TORAGESIC SL 10MG COM 10 COMPRIMIDOS (EMS)',
    valor:'R$ 37,02',
    img:'https://santaluciadrogaria.vtexassets.com/arquivos/ids/160036-800-1067?v=637638052355630000&width=800&height=1067&aspect=true',
},{
    nome:'DIPIRONA NEO QUÍMICA 1G COM 10 COMPRIMIDOS',
    valor:'R$ 12,76',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/197470-1000-1000/717873.jpg?v=638060971273530000',
},{
    nome:'TYLENOL 750MG COM 20 COMPRIMIDOS',
    valor:'R$ 36,03',
    img:'https://precopopular.vteximg.com.br/arquivos/ids/198818-400-400/7896212422517_2.jpg?v=638088893661630000',
},
]



const listaDeRemedios = document.getElementById('listaDeRemedios')


remedios.map((item) => {
listaDeRemedios.innerHTML += `<div class="card  bg-light mb-3 border-success"  style="max-width: 18rem;">
<img class="card-img-top"
  src="${item.img}">
  <div class="card-body">

  <h3 class="card-title">${item.nome} </h3>

  <p class="card-price">${item.valor}</p>

  <button id='btn' class='botaoFavoritar btn btn-outline-danger'>
  <span class="material-symbols-outlined">
favorite
</span>

  </button>
  <button  class=" botaoAdicionar  btn btn-outline-success">Adicionar<i class="material-icons">add_shopping_cart</i></button>
</div>
</div>`})
