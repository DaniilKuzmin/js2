'use strict'
const products = [
    {id:1, title: 'Notebook', price: 20000},
    {id:2, title: 'Mouse', price: 1500},
    {id:3, title: 'Keyboard', price: 5000},
    {id:4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'img/hcyr.jpg') => {
    return `<div class="product-item">
        <h3 class="heading">${title}</h3>
        <p>Цена: ${price}</p>
        <button class="by-btn">Добавить в корзину</button>
        <img class="product-img" src='${img}' alt="#">
    </div>`;
};

const renderProducts = (list) => {
    const productList = list.map(function (product) {
        return renderProduct(product.title, product.price);
    });
    console.log(productList);
    productList.forEach(function (item) {
        document.querySelector('.products').insertAdjacentHTML(`beforeend`, item);
    })
};

renderProducts(products);