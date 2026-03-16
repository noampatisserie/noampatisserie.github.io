// ==========================================
// SHOPPING CART
// ==========================================

let cart = [];

// Load cart from localStorage on page load
function loadCart() {
    const savedCart = localStorage.getItem('noamCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('noamCart', JSON.stringify(cart));
}

// Add item to cart
function addToCart(name, price, category) {
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: parseFloat(price),
            category: category,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showCartNotification();
}

// Remove item from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    updateCartUI();
}

// Update quantity
function updateQuantity(name, change) {
    const item = cart.find(item => item.name === name);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(name);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

// Calculate total
function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Update cart UI
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    if (totalItems === 0) {
        cartCount.style.display = 'none';
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        cartCount.style.display = 'flex';
        emptyCart.style.display = 'none';
        cartContent.style.display = 'block';
        
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-category">${item.category}</p>
                    <p class="cart-item-price">₪${item.price}</p>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-btn" onclick="updateQuantity('${item.name}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="cart-item-quantity">${item.quantity}</span>
                    <button class="cart-btn" onclick="updateQuantity('${item.name}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="cart-btn cart-btn-remove" onclick="removeFromCart('${item.name}')">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
        
        cartTotal.textContent = `₪${calculateTotal().toFixed(0)}`;
    }
}

// Show cart notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.innerHTML = '<i class="fas fa-check"></i> נוסף לעגלה!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : '';
}

// Send order via WhatsApp
function sendOrder() {
    if (cart.length === 0) {
        alert('העגלה ריקה!');
        return;
    }
    
    let message = '🧁 *הזמנה מהאתר*%0A%0A';
    
    cart.forEach(item => {
        message += `• ${item.name}%0A`;
        message += `  כמות: ${item.quantity}%0A`;
        message += `  מחיר: ₪${(item.price * item.quantity).toFixed(0)}%0A%0A`;
    });
    
    message += `*סה"כ: ₪${calculateTotal().toFixed(0)}*%0A%0A`;
    message += 'אשמח לקבל פרטים נוספים ולאשר את ההזמנה 😊';
    
    const whatsappNumber = '972587671205';
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Clear cart after sending
    cart = [];
    saveCart();
    updateCartUI();
    toggleCart();
}

// Add "Add to Cart" buttons to all menu items
function initializeCart() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        const title = item.querySelector('.menu-item-title').textContent;
        const priceText = item.querySelector('.menu-item-price').textContent;
        const price = priceText.replace('₪', '').trim();
        const category = item.querySelector('.menu-item-badge').textContent;
        
        // Create add to cart button
        const addButton = document.createElement('button');
        addButton.className = 'btn-add-to-cart';
        addButton.innerHTML = '<i class="fas fa-shopping-cart"></i> הוסף לעגלה';
        addButton.onclick = (e) => {
            e.preventDefault();
            addToCart(title, price, category);
        };
        
        // Add button to menu item
        const footer = item.querySelector('.menu-item-footer');
        footer.appendChild(addButton);
    });
    
    loadCart();
}

// Close cart when clicking outside
document.addEventListener('click', (e) => {
    const cartModal = document.getElementById('cartModal');
    if (e.target === cartModal) {
        toggleCart();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeCart);
