let quantity = document.querySelector('.total-quantity');
let checkout = document.querySelector('.btn-checkout');
let addButton = document.getElementById('quantity-up');
let subtractButton = document.getElementById('quantity-down');
let remove = document.querySelector('.remove');
let totalPrice = document.querySelector('.total-price');
let quantityNumber = 1;
let price = 15;
let total = price * quantityNumber;

addButton.addEventListener('click', function () {
    quantityNumber++;
    quantity.innerText = quantityNumber;
    total = quantityNumber * price;
    totalPrice.innerText = total;
})

subtractButton.addEventListener('click', function () {
    if (quantityNumber <= 0) {
        quantityNumber = 0;
    }
    else {
        quantityNumber--;
        quantity.innerText = quantityNumber;
        total = quantityNumber * price;
        totalPrice.innerText = total;
    }
})

remove.addEventListener('click', function () {
    quantityNumber = 0;
    quantity.innerText = quantityNumber;
    total = quantityNumber * price;
    totalPrice.innerText = total;
})