function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.trim().split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}


document.addEventListener('DOMContentLoaded', function() {
    function getCartFromCookies() {
        const cart = JSON.parse(getCookie('cart')) || [];
        return cart;
    }
    function displayCartOnCheckout() {
        const cart = getCartFromCookies();
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');

        cartItems.innerHTML = ''; 
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }

    displayCartOnCheckout();
});
