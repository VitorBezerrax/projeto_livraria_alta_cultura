const products = [
  {
    title: "O mínimo que você precisa saber para não ser um idiota",
    img: "https://img.yumpu.com/50632442/1/500x640/o-minimo-que-voc-precisa-saber-para-no-ser-um-idiota-olavo-de-carvalho.jpg",
    category: 'olavo'
  },
  {
   
    img: "https://m.media-amazon.com/images/I/31gRGR-48hL._SY445_SX342_ML2_.jpg",
    category: 'olavo'
  },
  {
    
    img: "https://tse3.mm.bing.net/th/id/OIP.QnN_Gl4MM-6K_JIpC2kgVgHaKe?r=0&w=1811&h=2560&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: 'olavo'
  },
  {
    
    img: "https://m.media-amazon.com/images/I/31xrtK6IRNL._SY445_SX342_ML2_.jpg",
    category: 'olavo'
  },
  {
    
    img: "https://http2.mlstatic.com/D_NQ_NP_648230-MLB28002615209_082018-O.webp",
    category: 'olavo'
  },
  {
    
    img: "https://http2.mlstatic.com/D_NQ_NP_707871-MLB47651150980_092021-O.webp",
    category: 'olavo'
  },
  {
    
    img: "https://m.media-amazon.com/images/I/61G18CBBBnL._SY425_.jpg",
    category: 'olavo'
  },
  {
  
    img: "https://m.media-amazon.com/images/I/61DPw12dqBL._SY425_.jpg",
    category: 'olavo'
  },

  {
    
    img: "https://http2.mlstatic.com/D_NQ_NP_981702-MLB51392787331_092022-O-o-foro-de-so-paulo-a-ascenso-do-comunismo-latino-americ.webp",
    category: 'olavo'
  },

{
    
    img: "https://tse4.mm.bing.net/th/id/OIP.NY6B-aGItj1-bVPR4Wcf6wHaLJ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    category: 'bruna'
  },


  {
    
    img: "https://rafaelfalcon.com.br/wp-content/uploads/2016/04/Ascensao-Universidades.jpg",
    category: 'falcon'
  },

  {
    
    img: "https://rafaelfalcon.com.br/wp-content/uploads/2016/04/educacao-do-orador.jpg",
    category: 'falcon'
  },
  

{
    
    img: "https://m.media-amazon.com/images/I/41FUN+6Y-pL._SY445_SX342_QL70_ML2_.jpg",
    category: 'falcon'
  },
  

{
    
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1405950475i/22752812.jpg",
    category: 'nasser'
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

const nasserBtn = document.getElementById('nasserBtn');
const brunaBtn = document.getElementById('brunaBtn');
const falconBtn = document.getElementById('falconBtn');
const olavoBtn = document.getElementById('olavoBtn');

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

displayProducts(products)



