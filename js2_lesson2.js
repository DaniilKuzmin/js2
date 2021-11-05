class ProductList {
    #goods;
    #allProducts;
    #totalPrice;

    constructor(container = '.products', totalPrice = 0) {
        this.container = container;
        this.#totalPrice = totalPrice;
        // this._goods = [];
        this.#goods = [];
        this.#allProducts = [];
        this.#fetchGoods();
        this.#render();
    }

    #fetchGoods() {
        this.#goods = [
            {id:1, title: 'Notebook', price: 20000},
            {id:2, title: 'Mouse', price: 1500},
            {id:3, title: 'Keyboard', price: 5000},
            {id:4, title: 'Gamepad', price: 4500}
        ]
    }

    #render() {
        const block = document.querySelector(this.container);
        for (let product of this.#goods) {
            this.#totalPrice = this.#totalPrice + product.price;
            const productObject = new ProductItem(product);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
        const totalPriceBlock = document.querySelector('.totalPrice');
        totalPriceBlock.insertAdjacentHTML('beforeend', `Итого: ${this.#totalPrice} \u20bd`);
    }
}

class ProductItem {
    constructor(product, img = 'img/hcyr.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img class="product-img" src="${this.img}" alt="#">
                    <div class="desc">
                        <h3 class="heading">${this.title}</h3>
                        <p>Цена: ${this.price} \u20bd</p>
                        <button class="by-btn">Купить</button>
                    </div>
                </div>`
    }
}

const productList = new ProductList();

// HAMBURGERS

class Hamburger {
    constructor(size, stuffing = []) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [].join('\n');
    }

    addTopping () {

    }

    removeTopping() {

    }

    getToppings() {

    }

    getSize() {
        return this.size;
    }

    getStuffing() {

    }

    calcPrice() {

    }

    calcCalories() {

    }
}

class MenuClickHandler {
   constructor() {
   }
}

const bigMak = new Hamburger('', '')
// 'use strict'
// const products = [
//     {id:1, title: 'Notebook', price: 20000},
//     {id:2, title: 'Mouse', price: 1500},
//     {id:3, title: 'Keyboard', price: 5000},
//     {id:4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (title, price, img = 'img/hcyr.jpg') => {
//     return `<div class="product-item">
//         <h3 class="heading">${title}</h3>
//         <p>Цена: ${price}</p>
//         <button class="by-btn">Добавить в корзину</button>
//         <img class="product-img" src='${img}' alt="#">
//     </div>`;
// };
//
// const renderProducts = (list) => {
//     const productList = list.map(function (product) {
//         return renderProduct(product.title, product.price);
//     });
//     console.log(productList);
//     productList.forEach(function (item) {
//         document.querySelector('.products').insertAdjacentHTML(`beforeend`, item);
//     })
// };
//
// renderProducts(products);

