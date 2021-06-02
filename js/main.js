class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img || 'http://lorempixel.com/200/150/technics'
    }

    render() {
        return `
          <div class="product" data-id="${this.id}">
            <div class="productDetails" style="background-image: url('${this.img}')">
                  <div class="productTitle">${this.title}</div>
                  <div class="productPrice">${this.price}\u20bd</div>
                  <button class="productButton">В корзину</button>
            </div>
            <div class="productId">${this.id}</div>
          </div>
        `;
    }
}

class ProductList {
    #privateProp;
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this.#privateProp = '123';

        this.#fetchProducts();
        this.render();
        this.renderTotal();    
    }

    get prop() {
        return this.#privateProp = value;
    }

    #fetchProducts() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500}
        ];
    }
    getTotal() {
        return this.goods.reduce((a, good) => a + good.price, 0);
    }
  
    addProduct(id) {
        id = parseInt(id, 10);
  
        this.goods.push(
            this.goods.find(good => good.id === id)
        );
    }
  
    renderTotal() {
        document.getElementById('cart-total').innerHTML = 
          `Всего ${this.goods.length} на ${this.getTotal()} \u20bd`;        
    }

    render() {
        const block = document.querySelector(this.container);
    
        for (let product of this.goods) {
          const productObject = new ProductItem(product);
    
          this.allProducts.push(productObject);
          block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

const list = new ProductList();

Array.from(document.querySelectorAll('.product'))
    .forEach(el => {
        el.addEventListener('click', () => {
            list.addProduct(el.dataset.id);
            list.renderTotal();
        });
    });

document.getElementById('logo').addEventListener('click', () => {
    [...document.getElementsByTagName('main')][0].classList.toggle('wide');
}, false);
   

// const init = () => {
//     renderProducts();
// }
//
// window.onload = init;