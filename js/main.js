const products = (() => {
    const minPrice = 100;
    const maxPrice = 1000;
    const names = [
        "A-Data",
        "AZUR",
        "AZARD",
        "AVEX",
        "Avery",
        "AVerM",
        "AVENGE",
        "AVAST",
        "AUTHOR",
        "AutoEx",
        "AURAMAX",
        "Technic",
        "ATLAS",
        "ATLANT",
        "ATEMI",
        "ASUS",
        "ASRock",
        "Artway",
        "STYLE",
        "PLAYS",
        "LAMP",
        "AROZZI",
        "Media",
        "ARK",
        "Ariston",
        "ARIEL",
        "Arian",
        "Ardo",
        "EQUAT",
        "AQUAPO",
        "AQUAF",
        "GAELLE",
        "AquaWork",
        "AFAR",
        "APPLET",
        "Apple",
        "APC",
        "AOS",
        "AOpen",
        "AOC",
        "ANKER",
        "ANIMAL",
        "Angelcare",
        "ANDREA",
        "ANDIS",
        "AMELY",
        "AMD",
        "AMBRE",
        "AMAZ",
        "AM-PM",
        "ALWAYS",
        "ALUMET"
    ];
    const rndItem = (a) => a[Math.floor(Math.random() * a.length)];
    const rndFloat = () => (Math.random() * (maxPrice - minPrice) + minPrice).toFixed(2);
    const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const items = [];

    const add = (totalItems) => {
        while (totalItems--) {
            items.push({
                id: totalItems,
                title: rndItem(names),
                price: rndFloat(),
                img: `http://lorempixel.com/${rndInt(100, 400)}/${rndInt(200, 600)}/technics`,
                description: 'Отличный товар!'
            });
        }
    };

    return {
        add,
        getItems: () => items,
    };
})();

const renderProduct = ({id = 0, title = '', price = 0, img = '', description = ''}) => {
    if (!price) {
        return '';
    }

    return `
      <div class="product">
        <div class="productId">${id}</div>
        <div class="productAside" style="background-image: url('${img}')"></div>
        <div class="productDetails">
            <div class="productData">
              <div class="productTitle">${title}</div>
              <div class="productPrice">${price}</div>
            </div>
            <div class="productControls">
              <div class="productDescription">${description}</div>
              <button class="productButton" data-id="${id}">Мне такое надо!</button>
            </div>
        </div>
      </div>
  `;
};

const renderProducts = () => {
    products.add(50);
    document.querySelector('.products').innerHTML = products.getItems().map(renderProduct).join('');
};

renderProducts();

document.getElementById('logo')
    .addEventListener('click', () => {
    [...document.getElementsByTagName('main')][0].classList.toggle('wide');
}, false);

// const init = () => {
//     renderProducts();
// }
//
// window.onload = init;