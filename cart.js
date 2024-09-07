// Initialize cart from localStorage or as an empty array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to update the cart display on the page
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');
    
    // Clear previous content in the cart table
    cartItemsContainer.innerHTML = '';
    let totalCartPrice = 0;

    // Loop through each item in the cart and generate table rows
    cart.forEach((item, index) => {
        const itemTotalPrice = item.quantity * item.price;
        totalCartPrice += itemTotalPrice;

        // Create a row for each item
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>
                <button onclick="decreaseQuantity(${index})">-</button>
                ${item.quantity}
                <button onclick="increaseQuantity(${index})">+</button>
            </td>
            <td>$${item.price.toFixed(2)}</td>
            <td>$${itemTotalPrice.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})" class="btn">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    // Update total price and cart count
    totalPriceElement.textContent = totalCartPrice.toFixed(2);
    cartCountElement.textContent = cart.length;

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Increase item quantity
function increaseQuantity(index) {
    cart[index].quantity += 1;
    updateCartDisplay(); // Update cart UI after change
}

// Decrease item quantity
function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        removeItem(index); // Remove item if quantity is 0
    }
    updateCartDisplay(); // Update cart UI after change
}

// Remove item from cart
function removeItem(index) {
    cart.splice(index, 1); // Remove the item from cart array
    updateCartDisplay(); // Update cart UI after removal
}

// Clear entire cart
document.getElementById('clear-cart-btn').addEventListener('click', () => {
    cart = []; // Empty the cart array
    updateCartDisplay(); // Update cart UI after clearing
});

// Initial display of the cart
updateCartDisplay();
