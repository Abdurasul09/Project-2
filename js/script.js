window.addEventListener('DOMContentLoaded', function(){
    let products = document.querySelectorAll('.product'),
        buttons = document.querySelectorAll('.button'),
        openBtn = document.querySelector('.open');

        // Модалбный окно

        function createCart(){
            let cart = document.createElement('div'),
                heading = document.createElement('h2'),
                field = document.createElement('div'),
                closeBtn = document.createElement('button');
        }

        // Style

        cart.classList.add('cart')
        field.classList.add('cart-field')
        closeBtn.classList.add('close')

        heading.textContent('В нашей корзине')
        closeBtn.textContent('Закрыть')

        document.body.appendChild(cart)
        cart.appendChild(field)
        cart.appendChild(heading)
        cart.appendChild(closeBtn)
})