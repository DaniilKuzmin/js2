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

const hamburger = {
    size:'',
    toppings: {
        cheese: false,
        salad: false,
        potato: false
    },
    adds: {
        seas: false,
        mayo: false
    },
    totalPrice: 0,
    totalClories: 0,
    renderTotalCalc() {
        const toppings = [];
        const adds = [];
        if (this.size === '') return 'Нужно выбрать размер';
        if (this.size === 'big') {
            size = 'большой';
        } else if (this.size === 'small'){
            size = 'небольшой';
        }
        if (this.toppings.cheese) {
            let cheese = 'сыром';
            toppings.push(cheese);
        }
        if (this.toppings.salad) {
            let salad = 'салатом';
            toppings.push(salad);
        }
        if (this.toppings.potato) {
            let potato = 'картофелем';
            toppings.push(potato);
        }
        if (this.adds.seas) {
            let seas = 'приправа';
            adds.push(seas);
        }
        if (this.adds.mayo) {
            let mayo = 'майонез';
            adds.push(mayo);
        }
        return `<div class="totalCalculate">Вы заказали ${size} бургер с ${toppings}. Дополнительно: ${adds}. <br> Стоимостью: ${this.totalPrice}руб. <br> Общей калорийностью: ${this.totalClories}ккал.</div>`
    }
};

class topping {
    constructor(price, colories) {
        this.price = price;
        this.colories = colories;
    }
}

const small = new topping(50 , 20);
const big = new topping(100 , 40);
const cheese = new topping(10 , 20);
const salad = new topping(20 , 5);
const potato = new topping(15 , 10);
const seas = new topping(15 , 0);
const mayo = new topping(20 , 5);

        //Обработчик события клик по кнопке в меню

function clickHandler(event) {
    if (event.target.tagName != 'BUTTON') return;
    if (event.target.id === hamburger.size) return;
    console.log(event.target.id);
    if (event.target.id === 'small') {
        if (hamburger.size === '') {
            hamburger.size = 'small';
            hamburger.totalPrice += small.price;
            hamburger.totalClories += small.colories;
        } else if (hamburger.size === 'big') {
            hamburger.size = 'small';
            hamburger.totalPrice -= big.price;
            hamburger.totalClories -= big.colories;
            hamburger.totalPrice += small.price;
            hamburger.totalClories += small.colories;
        }
    } else if (event.target.id === 'big') {
        if (hamburger.size === '') {
            hamburger.size = 'big';
            hamburger.totalPrice += big.price;
            hamburger.totalClories += big.colories;
        } else if (hamburger.size === 'small') {
            hamburger.size = 'big';
            hamburger.totalPrice -= small.price;
            hamburger.totalClories -= small.colories;
            hamburger.totalPrice += big.price;
            hamburger.totalClories += big.colories;
        }
    }
    if (event.target.id === 'cheese') {
        if (hamburger.toppings.cheese === false) {
            hamburger.toppings.cheese = true;
            hamburger.totalPrice += cheese.price;
            hamburger.totalClories += cheese.colories;
        }
    } else if (event.target.id === 'cheese-del') {
        if (hamburger.toppings.cheese === true){
            hamburger.toppings.cheese = false;
            hamburger.totalPrice -= cheese.price;
            hamburger.totalClories -= cheese.colories;
        }
    }
    if (event.target.id === 'potato') {
        if (hamburger.toppings.potato === false) {
            hamburger.toppings.potato = true;
            hamburger.totalPrice += potato.price;
            hamburger.totalClories += potato.colories;
        }
    } else if (event.target.id === 'potato-del') {
        if (hamburger.toppings.potato === true){
            hamburger.toppings.potato = false;
            hamburger.totalPrice -= potato.price;
            hamburger.totalClories -= potato.colories;
        }
    }
    if (event.target.id === 'salad') {
        if (hamburger.toppings.salad === false) {
            hamburger.toppings.salad = true;
            hamburger.totalPrice += salad.price;
            hamburger.totalClories += salad.colories;
        }
    } else if (event.target.id === 'salad-del') {
        if (hamburger.toppings.salad === true){
            hamburger.toppings.salad = false;
            hamburger.totalPrice -= salad.price;
            hamburger.totalClories -= salad.colories;
        }
    }
    if (event.target.id === 'seas') {
        if (hamburger.adds.seas === false) {
            hamburger.adds.seas = true;
            hamburger.totalPrice += seas.price;
            hamburger.totalClories += seas.colories;
        }
    } else if (event.target.id === 'seas-del') {
        if (hamburger.adds.seas === true){
            hamburger.adds.seas = false;
            hamburger.totalPrice -= seas.price;
            hamburger.totalClories -= seas.colories;
        }
    }
    if (event.target.id === 'mayo') {
        if (hamburger.adds.mayo === false) {
            hamburger.adds.mayo = true;
            hamburger.totalPrice += mayo.price;
            hamburger.totalClories += mayo.colories;
        }
    } else if (event.target.id === 'mayo-del') {
        if (hamburger.adds.mayo === true){
            hamburger.adds.mayo = false;
            hamburger.totalPrice -= mayo.price;
            hamburger.totalClories -= mayo.colories;
        }
    }
    console.log(hamburger)
}
document.querySelector('.menu').addEventListener('click', clickHandler);

//обработчик события клика по кнопке Рассчитать

function calculateClickHandler(event) {
    document.querySelector('#calculate').insertAdjacentHTML('afterend',hamburger.renderTotalCalc());
}
document.querySelector('#calculate').addEventListener('click', calculateClickHandler)



// class Hamburger {
//     constructor(size, stuffing = []) {
//         this.size = size;
//         this.stuffing = stuffing;
//         this.toppings = [].join('\n');
//     }

//     addTopping () {

//     }

//     removeTopping() {

//     }

//     getToppings() {

//     }

//     getSize() {
//         return this.size;
//     }

//     getStuffing() {

//     }

//     calcPrice() {

//     }

//     calcCalories() {

//     }
// }

// class MenuClickHandler {
//    constructor() {
//    }
// }

//const bigMak = new Hamburger('', '')
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

