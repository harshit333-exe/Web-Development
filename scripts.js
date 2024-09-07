// Function to handle adding items to the cart
let cartCount = 0;

function addToCart(productName, productPrice) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;

    // Notify user
    alert(`${productName} has been added to your cart! Price: $${productPrice}`);
}

// Search products function
function searchProducts() {
    let input = document.getElementById('search').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach((product) => {
        let productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(input)) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Smooth fade-in animation when page loads
window.onload = function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((element) => {
        element.style.opacity = 0;
        let fadeEffect = setInterval(() => {
            if (!element.style.opacity) {
                element.style.opacity = 0;
            }
            if (parseFloat(element.style.opacity) < 1) {
                element.style.opacity = parseFloat(element.style.opacity) + 0.05;
            } else {
                clearInterval(fadeEffect);
            }
        }, 50);
    });
};
