document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    console.log(addToCartButtons)
    const cartItems = document.getElementById('cart-items');
    console.log(cartItems);
    const cartTotal = document.getElementById('cart-total');
    const cartContents = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.getAttribute('data-product');
            const price = parseFloat(this.getAttribute('data-price'));
            cartContents.push({ product, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cartContents.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.product} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(listItem);
            total += item.price;
        });

        cartTotal.textContent = total.toFixed(2);
    }
});
