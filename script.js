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
        name: "Product 1",
        url: "/products/1",
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
      },
      3: {
        id: 3,
        name: "Simple Phone Stand Model by REDZC",
        url: "/products/3",
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
        url: "/products/4",
        description: "A small figurine to decorate your desk.4",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product4.stl",
      },
      5: {
        id: 5,
        name: "Product 5",
        url: "/products/5",
        description: "A small figurine to decorate your desk.5",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product5.stl",
      },
      6: {
        id: 6,
        name: "Product 6",
        url: "/products/6",
        description: "A small figurine to decorate your desk.6",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product6.stl",
      }
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
 
