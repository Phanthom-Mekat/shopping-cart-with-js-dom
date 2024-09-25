const products = [
    {
      id: "5960bf40-9603-4a39-9ff6-6cf9f1ce4815",
      category: "Sneakers",
      name: "COLORFUL RUNNING SHOES",
      seller: "Niko",
      img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      details: {
        price: 120,
        stock: 50,
        shipping: 0,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.5,
        ratingsCount: 128,
      },
    },
    {
      id: "7f8d3a2e-6b5c-4f1d-9e8a-2c4b3d5e6f7g",
      category: "Sneakers",
      name: "WHITE SNEAKERS RED LACES",
      seller: "Addidas",
      img: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
      details: {
        price: 95,
        stock: 30,
        shipping: 5,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.2,
        ratingsCount: 87,
      },
    },
    {
      id: "3e4d5c6b-7a8f-9e0d-1c2b-3a4b5c6d7e8f",
      category: "Sneakers",
      name: "RED NIKO SNEAKERS",
      seller: "Niko",
      img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      details: {
        price: 150,
        stock: 25,
        shipping: 0,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.8,
        ratingsCount: 203,
      },
    },
    {
      id: "9a8b7c6d-5e4f-3g2h-1i0j-9k8l7m6n5o4p",
      category: "Sneakers",
      name: "WHITE ADDIDAS SNEAKERS",
      seller: "Addidas",
      img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      details: {
        price: 110,
        stock: 40,
        shipping: 5,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.3,
        ratingsCount: 156,
      },
    },
    {
      id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q",
      category: "Sneakers",
      name: "NIKO AIR JORDANS",
      seller: "Niko",
      img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
      details: {
        price: 200,
        stock: 20,
        shipping: 0,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.9,
        ratingsCount: 312,
      },
    },
    {
      id: "8p9o0n1m-2l3k-4j5i-6h7g-8f9e0d1c2b3a",
      category: "Sneakers",
      name: "COLORFUL SNEAKERS YELLOW BG",
      seller: "Reebak",
      img: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      details: {
        price: 85,
        stock: 60,
        shipping: 5,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.1,
        ratingsCount: 98,
      },
    },
    {
      id: "4q5r6s7t-8u9v-0w1x-2y3z-4a5b6c7d8e9f",
      category: "Boots",
      name: "BROWN LEATHER BOOTS",
      seller: "Timberlond",
      img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      details: {
        price: 180,
        stock: 30,
        shipping: 10,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.7,
        ratingsCount: 89,
      },
    },
    {
      id: "1g2h3i4j-5k6l-7m8n-9o0p-1q2r3s4t5u6v",
      category: "Sneakers",
      name: "WHITE SNEAKERS BLUE BG",
      seller: "Niko",
      img: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
      details: {
        price: 100,
        stock: 45,
        shipping: 0,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.4,
        ratingsCount: 178,
      },
    },
    {
      id: "7w8x9y0z-1a2b-3c4d-5e6f-7g8h9i0j1k2l",
      category: "Sneakers",
      name: "ASSORTED COLORFUL SNEAKERS",
      seller: "MultiBrend",
      img: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
      details: {
        price: 130,
        stock: 35,
        shipping: 5,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.6,
        ratingsCount: 215,
      },
    },
    {
      id: "3m4n5o6p-7q8r-9s0t-1u2v-3w4x5y6z7a8b",
      category: "Sneakers",
      name: "BLACK WHITE CHECKERED VANS",
      seller: "Vons",
      img: "https://images.unsplash.com/photo-1612015670817-0127d21628d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      details: {
        price: 70,
        stock: 55,
        shipping: 0,
        quantity: 0,
      },
      ratingsInfo: {
        ratings: 4.5,
        ratingsCount: 302,
      },
    },
    {
        id: "new-sneaker-1",
        category: "Sneakers",
        name: "RED AIR JORDAN HIGHTOPS",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        details: {
          price: 180,
          stock: 25,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.8,
          ratingsCount: 302,
        },
      },
      {
        id: "new-sneaker-2",
        category: "Sneakers",
        name: "WHITE CLASSIC SNEAKERS",
        seller: "Addidas",
        img: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        details: {
          price: 110,
          stock: 40,
          shipping: 5,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.5,
          ratingsCount: 189,
        },
      },
      {
        id: "new-sneaker-3",
        category: "Sneakers",
        name: "BLUE AND WHITE RUNNERS",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        details: {
          price: 130,
          stock: 35,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.6,
          ratingsCount: 215,
        },
      },
      {
        id: "new-sneaker-4",
        category: "Sneakers",
        name: "MULTICOLOR CASUAL SNEAKERS",
        seller: "Reebak",
        img: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
          price: 95,
          stock: 50,
          shipping: 5,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.3,
          ratingsCount: 178,
        },
      },
      {
        id: "new-sneaker-5",
        category: "Sneakers",
        name: "WHITE HIGH TOP CLASSICS",
        seller: "Convirge",
        img: "https://images.unsplash.com/photo-1608379743051-5eac51001aab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
          price: 75,
          stock: 60,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.7,
          ratingsCount: 322,
        },
      },
      {
        id: "new-sneaker-6",
        category: "Boots",
        name: "CLASSIC LEATHER BOOTS",
        seller: "Timberlond",
        img: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        details: {
          price: 200,
          stock: 30,
          shipping: 10,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.9,
          ratingsCount: 156,
        },
      },
      {
        id: "new-sneaker-7",
        category: "Sneakers",
        name: "CHECKERED SLIP-ONS",
        seller: "Vons",
        img: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        details: {
          price: 65,
          stock: 80,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.6,
          ratingsCount: 278,
        },
      },
      {
        id: "new-sneaker-8",
        category: "Sneakers",
        name: "NEON YELLOW PERFORMANCE",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=715&q=80",
        details: {
          price: 140,
          stock: 45,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.4,
          ratingsCount: 203,
        },
      },
      {
        id: "new-sneaker-9",
        category: "Sneakers",
        name: "WHITE URBAN CLASSICS",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1179&q=80",
        details: {
          price: 120,
          stock: 55,
          shipping: 5,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.7,
          ratingsCount: 289,
        },
      },
      {
        id: "new-sneaker-10",
        category: "Sneakers",
        name: "WHITE HIGH TOP CANVAS",
        seller: "Convirge",
        img: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        details: {
          price: 70,
          stock: 70,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.5,
          ratingsCount: 312,
        },
      },
      {
        id: "new-sneaker-11",
        category: "Sneakers",
        name: "MULTICOLOR PERFORMANCE RUNNERS",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80",
        details: {
          price: 150,
          stock: 40,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.8,
          ratingsCount: 267,
        },
      },
      {
        id: "new-sneaker-12",
        category: "Sneakers",
        name: "WHITE AND GOLD CLASSICS",
        seller: "Addidas",
        img: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        details: {
          price: 100,
          stock: 60,
          shipping: 5,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.6,
          ratingsCount: 198,
        },
      },
      {
        id: "new-sneaker-13",
        category: "Sneakers",
        name: "COLORFUL COLLECTION",
        seller: "MultiBrend",
        img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        details: {
          price: 110,
          stock: 50,
          shipping: 5,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.5,
          ratingsCount: 234,
        },
      },
      {
        id: "new-sneaker-14",
        category: "Sneakers",
        name: "WHITE URBAN COMFORT",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        details: {
          price: 130,
          stock: 45,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.7,
          ratingsCount: 276,
        },
      },
      {
        id: "new-sneaker-15",
        category: "Sneakers",
        name: "ORANGE PERFORMANCE RUNNERS",
        seller: "Niko",
        img: "https://images.unsplash.com/photo-1586525198428-225f6f12cff5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        details: {
          price: 145,
          stock: 35,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.6,
          ratingsCount: 189,
        },
      },
      {
        id: "new-sneaker-16",
        category: "Sneakers",
        name: "ARTISTIC SPLASH SNEAKERS",
        seller: "ArtWolk",
        img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
        details: {
          price: 90,
          stock: 30,
          shipping: 5,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.3,
          ratingsCount: 156,
        },
      },
      {
        id: "new-sneaker-17",
        category: "Sneakers",
        name: "PASTEL DELIGHT COLLECTION",
        seller: "Reebak",
        img: "https://images.unsplash.com/photo-1605733160314-4fc7dac4bb16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1258&q=80",
        details: {
          price: 85,
          stock: 40,
          shipping: 0,
          quantity: 0,
        },
        ratingsInfo: {
          ratings: 4.4,
          ratingsCount: 201,
        },
      },
  ];

function displayProduct(){
    for(let items of products){
        const card = document.createElement('div');
        
        card.innerHTML = `
        <div class="card glass w-96">
            <figure>
              <img 
                src="${items.img}"
                alt="car!"
                class="w-full h-60 object-cover" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">${items.name}</h2>
              <p>price:${items.details.price}$</p>
              <div class="card-actions justify-end">
                <button onclick='addtocart("${items.name}",${items.details.price})' class="btn btn-primary">Buy Now!</button>
              </div>
            </div>
          </div>
        
        `;
        document.getElementById('product').appendChild(card);

    }
}
let cartCount = 0;
let productPrice = 0;

function addtocart(name,price){
    cartCount++;
    const cartCounter=document.getElementById('cart-count');
    cartCounter.innerHTML = cartCount;
    const cartCount1=document.getElementById('cart-count1');
    cartCount1.innerHTML = cartCount;
    const total = document.getElementById('total');
    productPrice += price;
    total.innerHTML = productPrice;
}


displayProduct();