// Sample product data - Replace with your actual products
const products = [
    {
        id: 1,
        name: "Product One",
        description: "Innovative solution for modern businesses",
        price: 299.99,
        image: "assets/product1.jpg",
        category: "Category A"
    },
    {
        id: 2,
        name: "Product Two",
        description: "Advanced technology for enhanced performance",
        price: 399.99,
        image: "assets/product2.jpg",
        category: "Category A"
    },
    {
        id: 3,
        name: "Product Three",
        description: "Premium quality for professional use",
        price: 499.99,
        image: "assets/product3.jpg",
        category: "Category B"
    },
    {
        id: 4,
        name: "Product Foure",
        description: "Premium quality for professional use",
        price: 499.99,
        image: "assets/product4.jpg",
        category: "Category B"
    },
    {
        id: 5,
        name: "Product five",
        description: "Premium quality for professional use",
        price: 499.99,
        image: "assets/product5.jpg",
        category: "Category B"
    },
    {
        id: 6,
        name: "Product six",
        description: "Premium quality for professional use",
        price: 499.99,
        image: "assets/product3.jpg",
        category: "Category B"
    },

    // Add more products up to 15
];

// Function to render products
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-4 mb-4';
        productCard.innerHTML = `
            <div class="card product-card" data-aos="fade-up">
                <img src="${product.image}" class="card-img-top product-image" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="h6 mb-0">EGP ${product.price}</span>
                        <button class="btn btn-primary btn-sm" onclick="addToCart(${product.id})">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to filter products by category
function filterProducts(category) {
    const filtered = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    renderProducts(filtered);
}
