
const products = [
  {
    productName: "Sandia",
    img: "https://img.yumpu.com/50632442/1/500x640/o-minimo-que-voc-precisa-saber-para-no-ser-um-idiota-olavo-de-carvalho.jpg",
    category: 'olavo'
  },
  {
    productName: "Bananita",
    img: "https://m.media-amazon.com/images/I/31gRGR-48hL._SY445_SX342_ML2_.jpg",
    category: 'olavo'
  },
  {
    productName: "CPU",
    img: "https://tse3.mm.bing.net/th/id/OIP.QnN_Gl4MM-6K_JIpC2kgVgHaKe?r=0&w=1811&h=2560&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: 'olavo'
  },
  {
    productName: "Compu",
    
    img: "https://m.media-amazon.com/images/I/31xrtK6IRNL._SY445_SX342_ML2_.jpg",
    category: 'olavo'
  },
  {
    productName: "Huevito",
    img: "https://http2.mlstatic.com/D_NQ_NP_648230-MLB28002615209_082018-O.webp",
    category: 'olavo'
  },
  {
    productName: "Mate",
    img: "https://http2.mlstatic.com/D_NQ_NP_707871-MLB47651150980_092021-O.webp",
    category: 'olavo'
  },
  {
    productName: "Cafecito",
    img: "https://m.media-amazon.com/images/I/61G18CBBBnL._SY425_.jpg",
    category: 'olavo'
  },
  {
    productName: "Cervecita",
    img: "https://m.media-amazon.com/images/I/61DPw12dqBL._SY425_.jpg",
    category: 'olavo'
  },

  {
    productName: "Cervecita",
    img: "https://http2.mlstatic.com/D_NQ_NP_981702-MLB51392787331_092022-O-o-foro-de-so-paulo-a-ascenso-do-comunismo-latino-americ.webp",
    category: 'olavo'
  },

{
    productName: "Cervecita",
    img: "https://tse4.mm.bing.net/th/id/OIP.NY6B-aGItj1-bVPR4Wcf6wHaLJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: 'bruna'
  },




]

const displayProducts = (productsToShow) => {
  const shopContent = document.getElementById("shopContent")

  shopContent.innerHTML = ""
  productsToShow.forEach(product => {
    const div = document.createElement("div")
    div.className = 'card-products'
    div.innerHTML = `
      <img src="${product.img}" alt="algun-alt">
      <h3>${product.productName}</h3>
      <p class="price"> $ ${product.price}</p>
      <button>Agregar al carrito</button>
    `
    shopContent.append(div)
  })
}

const filterProducts = (category) => {
  const productsToShow = products.filter(product => product.category === category)
  displayProducts(productsToShow)
}

const frutasBtn = document.getElementById('frutasBtn');
const brunaBtn = document.getElementById('brunaBtn');
const compusBtn = document.getElementById('compusBtn');
const olavoBtn = document.getElementById('olavoBtn');

frutasBtn.addEventListener('click', () => {
  filterProducts('frutas');
});

brunaBtn.addEventListener('click', () => {
  filterProducts('bruna');
});

compusBtn.addEventListener('click', () => {
  filterProducts('compus');
});

olavoBtn.addEventListener('click', () => {
  displayProducts(products)
});

displayProducts(products)



