const products = [
  {
    title: "O mínimo que você precisa saber para não ser um idiota",
    img: "https://img.yumpu.com/50632442/1/500x640/o-minimo-que-voc-precisa-saber-para-no-ser-um-idiota-olavo-de-carvalho.jpg",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
   title: "O Jardim das Aflições",
    img: "https://m.media-amazon.com/images/I/31gRGR-48hL._SY445_SX342_ML2_.jpg",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
    title: "Aristóteles em Nova Perspectiva",
    img:"https://tse3.mm.bing.net/th/id/OIP.QnN_Gl4MM-6K_JIpC2kgVgHaKe?r=0&w=1811&h=2560&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
    title: "A consciência da imortalidade",
    img: "https://m.media-amazon.com/images/I/31xrtK6IRNL._SY445_SX342_ML2_.jpg",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
    title: "A Nova Era e a Revolução Cultural ",
    img: "https://http2.mlstatic.com/D_NQ_NP_648230-MLB28002615209_082018-O.webp",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
    title: "Diário filosófico",
    img:"https://http2.mlstatic.com/D_NQ_NP_707871-MLB47651150980_092021-O.webp",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
    title: "Droga é cultura",
    img: "https://m.media-amazon.com/images/I/61G18CBBBnL._SY425_.jpg",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },
  {
  
    title: "A vingança de Aristóteles",
    img: "https://m.media-amazon.com/images/I/61DPw12dqBL._SY425_.jpg",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },

  {
    title: "O Foro de São Paulo",
    img:"https://http2.mlstatic.com/D_NQ_NP_981702-MLB51392787331_092022-O-o-foro-de-so-paulo-a-ascenso-do-comunismo-latino-americ.webp",
    description: "Olavo de Carvalho",
    category: 'olavo'
  },

{
    title: "O mínimo sobre Platão",
    img: "https://tse4.mm.bing.net/th/id/OIP.NY6B-aGItj1-bVPR4Wcf6wHaLJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "Bruna Torlay",
    category: 'bruna'
  },


  {
    title: "A Ascensão das Universidades",
    img: "https://rafaelfalcon.com.br/wp-content/uploads/2016/04/Ascensao-Universidades.jpg",
    description: "Rafael Falcón",
    category: 'falcon'
  },

  {
    title: "A Educação do Orador",
    img: "https://rafaelfalcon.com.br/wp-content/uploads/2016/04/educacao-do-orador.jpg",
    description: "Rafael Falcón",
    category: 'falcon'
  },
  

{
    title: "Metamorfoses",
    img: "https://m.media-amazon.com/images/I/41FUN+6Y-pL._SY445_SX342_QL70_ML2_.jpg",
    description: "Rafael Falcón",
    category: 'falcon'
  },
  

{
    title: "Os Lusíadas & Fédon",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405950475i/22752812.jpg",
    description: "José Monir Nasser",
    category: 'nasser'
  },


]

const displayProducts = (productsToShow) => {
  const shopContent = document.getElementById("shopContent")

  shopContent.innerHTML = ""
  productsToShow.forEach(product => {
    const div = document.createElement("div")
    div.className = 'card-products'
    div.style.cursor = 'pointer'
    div.innerHTML = `
      <img src="${product.img}" alt="algun-alt">
      <h3>${product.title}</h3>

    <p>${product.description}</p>
    `
    shopContent.append(div)
  })
}

const filterProducts = (category) => {
  const productsToShow = products.filter(product => product.category === category)
  displayProducts(productsToShow)
}

const todosBtn = document.getElementById("todosBtn");
const nasserBtn = document.getElementById('nasserBtn');
const brunaBtn = document.getElementById('brunaBtn');
const falconBtn = document.getElementById('falconBtn');
const olavoBtn = document.getElementById('olavoBtn');

[todosBtn, nasserBtn, brunaBtn, falconBtn, olavoBtn].forEach((btn) => {
  if (btn) {
    btn.style.cursor = 'pointer';
  }
});

nasserBtn.addEventListener('click', () => {
  filterProducts('nasser');
});

brunaBtn.addEventListener('click', () => {
  filterProducts('bruna');
});

falconBtn.addEventListener('click', () => {
  filterProducts('falcon');
});

olavoBtn.addEventListener('click', () => {
  filterProducts('olavo')
});

todosBtn.addEventListener('click', () => {
  displayProducts(products);
});

displayProducts(products)



