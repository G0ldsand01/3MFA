const models = {
  1: {
    id: 1,
    name: "Product 1",
    url: "/models/1",
    description: "A small figurine to decorate your desk.",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/files/dinosaur.5.stl",
    file_name: "Chubby_Dinausaur.stl",
    preview: "/assets/products/preview/Sliced_Chubby_Dinosaur.png",
    model_link: "https://www.thingiverse.com/thing:6688083",
    model_author: "tosse52",
    model_source: "Thingiverse",
    price: "3.00$",
  },
  2: {
    id: 2,
    name: "Pumpkin Spider Model by Mr. Purple",
    url: "/models/2",
    description: "A small figurine to decorate your desk.",
    image: "./assets/products/spider.png",
    stl: "./assets/files/Pumpkin_Spider.stl",
    preview: "./assets/products/preview/sliced_spider.jpg",
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    file_name: "Pumpkin_Spider.stl",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Mr. Purple",
    model_source: "Printables",
    price: "3.00$",
  },
  3: {
    id: 3,
    name: "Simple Phone Stand Model by REDZC",
    url: "/models/3",
    description: "Easy printable phone stand that can be printed without support.",
    image: "/assets/products/phone_stand.png",
    preview: "/assets/products/preview/phone_stand.png",
    stl: "/assets/files/phone_stand.stl",
    file_name: "phone_stand.stl",
    model_link:"https://www.printables.com/model/41493-phone-stand",
    model_author: "An0b1s",
    model_source: "Printables",
    buy_link: "https://buy.stripe.com/test_3cscO2cSS1ncgcE3cd",
    price: "2.50$",
  },
  4: {
    id: 4,
    name: "Product 4",
    url: "/models/4",
    description: "A small figurine to decorate your desk.4",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product4.stl",
    file_name: "product4.stl",  
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Goldsand",
    model_source: "3MFA",
    price: "10.00$",
  },
  5: {
    id: 5,
    name: "Product 5",
    url: "/models/5",
    description: "A small figurine to decorate your desk.5",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product5.stl",
    file_name: "product5.stl",  
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Goldsand",
    model_source: "3MFA",
    price: "10.00$",
  },
  6: {
    id: 6,
    name: "Product 6",
    url: "/models/6",
    description: "A small figurine to decorate your desk.6",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product6.stl",
    file_name: "product6.stl",  
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Goldsand",
    model_source: "3MFA",
    price: "10.00$",
  },
  7: {
    id: 7,
    name: "Product 7",
    url: "/models/7",
    description: "A small figurine to decorate your desk.7",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product7.stl",
    file_name: "product7.stl",  
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Goldsand",
    model_source: "3MFA",
    price: "10.00$",
  },
  8: {
    id: 8,
    name: "Product 8",
    url: "/models/8",
    description: "A small figurine to decorate your desk.8",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product8.stl",
    file_name: "product8.stl",  
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Goldsand",
    model_source: "3MFA",
    price: "10.00$",
  },
  9: {
    id: 5,
    name: "Product 9",
    url: "/models/9",
    description: "A small figurine to decorate your desk.9",
    image: "./assets/products/Chubby_Dinosaur.png",
    stl: "./assets/products/product9.stl",
    file_name: "product9.stl",  
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Goldsand",
    model_source: "3MFA",
    price: "10.00$",
  },
  10: {
    id: 10,
    name: "Product 10",
    url: "/models/10",
    description: "A small figurine to decorate your desk.10",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product10.stl",
    file_name: "product10.stl",
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Mr. Purple",
    model_source: "Printables",
    price: "3.00$",
  },
  11: {
    id: 11,
    name: "Product 11",
    url: "/models/11",
    description: "A small figurine to decorate your desk.11",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product11.stl",
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    file_name: "Pumpkin_Spider.stl",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Mr. Purple",
    model_source: "Printables",
    price: "3.00$",
  },
  12: {
    id: 12,
    name: "Product 12",
    url: "/models/12",
    description: "A small figurine to decorate your desk.12",
    image: "/assets/products/Chubby_Dinosaur.png",
    stl: "/assets/products/product12.stl",
    model_link:"https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
    file_name: "Pumpkin_Spider.stl",
    buy_link: "https://buy.stripe.com/test_8wM7tI066d5U1hK000",
    model_author: "Mr. Purple",
    model_source: "Printables",
    price: "3.00$",
  },
  };

  function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  
  function displayProduct() {
    const productId = getProductId();
    const product = models[productId];
    if (product) {
      document.getElementById("product-name").innerText = product.name;;
      const productImage = document.getElementById("product-image");
      productImage.src = product.image;;
      productImage.style.borderRadius = "10px";
      document.getElementById("product-description").innerText =
        product.description;
      document.getElementById("preview").src = product.preview;
      document.getElementById("file-name").innerHTML = product.file_name;
      document.getElementById("download-button").href = product.stl;
      document.getElementById("buy_link").href = product.buy_link;
      document.getElementById("model_link").href = product.model_link;
      document.getElementById("buy-text").innerText = "Buy Now (" + product.price+")";
      document.getElementById("model-text").innerText = "Model available on " + product.model_source + " and made by " + product.model_author;
    } else {
      document.getElementById("product-name").innerText =
        "Product not found";
    }
      
  }
  
  displayProduct();
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const overlay = document.querySelector(".overlay");
  
    menuButton.addEventListener("click", () => {
      overlay.classList.toggle("overlay--active");
      menuButton.classList.toggle("active");
    });
  });
  
  