document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const overlay = document.querySelector(".overlay");

  menuButton.addEventListener("click", () => {
    overlay.classList.toggle("overlay--active");
    menuButton.classList.toggle("active");
  });
});

const products = {
  1: {
    id: 1,
    name: "Simple Phone Stand Model by REDZC",
    url: "/products/1",
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
  2: {
    id: 2,
    name: "Pumpkin Spider Model by Mr. Purple",
    url: "/products/2",
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
    name: "Sugar Cube Tree for Bambu Lamp Kit 001",
    url: "/products/3",
    description: "Simple Tree for Bambu Lamp Kit",
    image: "https://makerworld.bblmw.com/makerworld/model/US7d52e5cd6de2c4/design/2024-04-01_zr6n6tr5u697.jpg?x-oss-process=image/resize,w_1000/format,webp",
    stl: "/assets/products/Sugar_Cube_Tree_for_Bambu_Lamp_Kit_001.zip",
    file_name: "Sugar_Cube_Tree_for_Bambu_Lamp_Kit_001.zip",
    preview: "/assets/products/preview/Sliced_sugar_cube_tree.png",
    model_link:"https://makerworld.com/fr/models/406265?from=search#profileId-308197",
    buy_link: "https://buy.stripe.com/test_7sI6pEaKKaXM1hKcMO",
    model_author: "Triple G workshop",
    model_source: "Maker World",
    price: "10.00$",
  },
  4: {
    id: 4,
    name: "Product 4",
    url: "/products/4",
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
    url: "/products/5",
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
    url: "/products/6",
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
    url: "/products/7",
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
    url: "/products/8",
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
    url: "/products/9",
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
    url: "/products/10",
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
    url: "/products/11",
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
    url: "/products/12",
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


    const productGrid = document.getElementById("product-grid");

    Object.values(products).forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
            <a href="product.html?id=${product.id}" style="text-decoration: none;" class="mt-4 text-blue-500 hover:underline">
                <img src="${product.image}" alt="${product.name}" style="border-radius" class="w-full h-auto object-cover rounded-t" />
                <div class="p-4">
                    <h2 class="mt-4 text-xl font-semibold" style="font-size: 1.5rem; padding-top: 2%;">${product.name}</h2>
                    <p class="text-gray-600">${product.description}</p>
                </div>
            </a>
            `;
      productGrid.appendChild(productCard);
    });
 
