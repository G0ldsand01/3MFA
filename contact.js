document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const closeButton = document.getElementById("close-button");
    const overlay = document.querySelector(".overlay");

    menuButton.addEventListener("click", () => {
      overlay.classList.toggle("overlay--active");
      menuButton.classList.toggle("active");
    });

    closeButton.addEventListener("click", () => {
      overlay.classList.toggle("overlay--active");
      menuButton.classList.toggle("active");
    });

    const products = {
      1: {
        id: 1,
        name: "Product 1",
        url: "/products/1",
        description: "A small figurine to decorate your desk.1",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/dinosaur.5.stl",
        file_name: "Chubby_Dinausaur.stl",
        preview: "/assets/products/preview/Sliced_Chubby_Dinosaur.png",
      },
      2: {
        id: 2,
        name: "Pumpkin Spider",
        url: "/products/2",
        description: "A small figurine to decorate your desk.2",
        image: "/assets/products/spider.png",
        stl: "/assets/Pumpkin_Spider.stl",
        preview: "/assets/sliced_spider.jpg",
        model:
          "https://www.printables.com/model/1043965-cute-little-pumpkin-spider",
        file_name: "Pumpkin_Spider.stl",
      },
      3: {
        id: 3,
        name: "Product 3",
        url: "/ products/3",
        description: "A small figurine to decorate your desk.3",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product3.stl",
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
      },
      7: {
        id: 7,
        name: "Product 7",
        url: "/products/7",
        description: "A small figurine to decorate your desk.7",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product7.stl",
      },
      8: {
        id: 8,
        name: "Product 8",
        url: "/products/8",
        description: "A small figurine to decorate your desk.8",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product8.stl",
      },
      9: {
        id: 5,
        name: "Product 9",
        url: "/products/9",
        description: "A small figurine to decorate your desk.9",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product9.stl",
      },
      10: {
        id: 10,
        name: "Product 10",
        url: "/products/10",
        description: "A small figurine to decorate your desk.10",
        image: "/assets/products/Chubby_Dinosaur.png",
        stl: "/assets/products/product10.stl",
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
  });