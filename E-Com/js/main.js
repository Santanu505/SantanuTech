// Sample product data
const products = [
    {
        id: 1,
        name: "Smartphone X",
        price: 699.99,
        category: "electronics",
        image: "images/smartphone.jpg",
        description: "Latest smartphone with advanced features"
    },
    {
        id: 2,
        name: "Laptop Pro",
        price: 1299.99,
        category: "electronics",
        image: "images/laptop.jpg",
        description: "High-performance laptop for professionals"
    },
    {
        id: 3,
        name: "Designer Dress",
        price: 199.99,
        category: "fashion",
        image: "images/dress.jpg",
        description: "Elegant dress for special occasions"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 249.99,
        category: "electronics",
        image: "images/smartwatch.jpg",
        description: "Feature-rich smartwatch for fitness tracking"
    },
    {
        id: 5,
        name: "Modern Sofa",
        price: 899.99,
        category: "home",
        image: "images/sofa.jpg",
        description: "Comfortable and stylish living room sofa"
    },
    {
        id: 6,
        name: "Coffee Table",
        price: 199.99,
        category: "home",
        image: "images/table.jpg",
        description: "Modern coffee table for your living room"
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showAlert('Product added to cart!', 'success');
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showAlert('Product removed from cart!', 'info');
}

// Show alert message
function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed top-0 end-0 m-3`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);
    setTimeout(() => alertDiv.remove(), 3000);
}

// Load featured products
function loadFeaturedProducts() {
    const featuredProductsContainer = document.getElementById('featured-products');
    if (featuredProductsContainer) {
        const featuredProducts = products.slice(0, 4);
        featuredProductsContainer.innerHTML = featuredProducts.map(product => `
            <div class="col-md-3 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
                        <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Filter products by category
function filterProducts(category) {
    const filteredProducts = category ? products.filter(p => p.category === category) : products;
    const productsContainer = document.getElementById('products-container');
    if (productsContainer) {
        productsContainer.innerHTML = filteredProducts.map(product => `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>$${product.price.toFixed(2)}</strong></p>
                        <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// Initialize cart count
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    loadFeaturedProducts();
    
    // Handle category filtering
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category) {
        filterProducts(category);
    }
});

// Form validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            
            // Validate required fields
            form.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('is-invalid');
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                showAlert('Form submitted successfully!', 'success');
                form.reset();
            }
        });
    }
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', () => {
    validateForm('contact-form');
    validateForm('login-form');
    validateForm('register-form');
}); 