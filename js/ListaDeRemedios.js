// Ex2 - [pagina-todos-medicamentos] Adicionar Lista de medicamentos

// Na página de todos os medicamentos, crie uma lista de medicamentos utilizando JavaScript para criar elementos do DOM dinamicamente. Os medicamentos devem ser exibidos em cards, contendo título, imagem, valor e um botão de adicionar ao carrinho.

// Sugestão: Crie uma lista de objetos  em Javascript com informações de cada card


const remedios =[{
    nome: 'NEOSALDINA DIPIRONA 300MG',
    valor: 'R$ 21,90',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'

},
{
    nome: 'Engov com 4 Comprimidos',
    valor: 'R$16,99',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{
    nome:'NOVALGINA XAROPE 100ML',
    valor:'R$ 37,43',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{

    nome:'LISADOR DIP 1G 20 COMPRIMIDOS',
    valor:'R$ 27,90',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{
    nome:'DORALGINA COM 20 DRÁGEAS',
    valor:'R$ 9,99',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'

    },
    {
    nome:'Sonrisal (GSK)',
    valor:'R$ 8,99',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{
    nome:'DORIL COM 6 COMPRIMIDOS',
    valor:'R$ 8,32',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{
    nome:'TORAGESIC SL 10MG COM 10 COMPRIMIDOS (EMS)',
    valor:'R$ 37,02',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{
    nome:'DIPIRONA NEO QUÍMICA 1G COM 10 COMPRIMIDOS',
    valor:'R$ 12,76',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'
},
{
    nome:'TYLENOL 750MG COM 20 COMPRIMIDOS',
    valor:'R$ 36,03',
    img:'https://d23z77da7dyql5.cloudfront.net/Custom/Content/Products/45/17/45176_nimesulida-eurofarma-100mg-caixa-com-12-comprimidos-p9018001_l1_637572094118824991.jpg'

}
]



const listaDeRemedios = document.getElementById('listaDeRemedios')


remedios.map((item) => {
listaDeRemedios.innerHTML += `<div class="card mb-3 border-success"  style="max-width: 18rem;">
<img class="card-img-top"
  src="${item.img}">
  <div class="card-body">

  <h3 class="card-title">${item.nome} </h3>

  <p class="card-price">${item.valor}</p>

  <button class='botaoFavoritar btn btn-outline-danger'>
  <span class="material-symbols-outlined">
favorite
</span>

  </button>
  <button  class=" botaoAdicionar  btn btn-outline-success">Adicionar<i class="material-icons">add_shopping_cart</i></button>
</div>
</div>`})



