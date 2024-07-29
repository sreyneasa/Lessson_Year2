let data = [
    { name: 'Apple', stock: '20', price: '10$' },
    { name: 'Banana', stock: '30', price: '15$' },
    { name: 'Orange', stock: '40', price: '20$' },
    { name: 'Pear', stock: '40', price: '30$' },
    { name: 'Kivi', stock: '40', price: '2$' }
];

function save() {
    localStorage.setItem('data', JSON.stringify(data));
}

function load() {
    data = JSON.parse(localStorage.getItem('data'));
}

function display_products() {
    let displayProduct = document.querySelector('#displayProduct');
    displayProduct.innerHTML = '';
    for (let product of data) {
        let card = document.createElement('div');
        card.className = 'card p-3 mt-3';
        let h3 = document.createElement('h3');
        h3.textContent = product.name;
        let pStock = document.createElement('span');
        pStock.textContent = 'Number in stock: ' + product.stock;
        let pPrice = document.createElement('span');
        pPrice.textContent = 'Price: ' + product.price;

        let btn = document.createElement('button');
        btn.textContent = 'Add to cart';
        btn.addEventListener('click', addToCart);

        card.appendChild(h3);
        card.appendChild(pStock);
        card.appendChild(pPrice);
        card.appendChild(btn);
        displayProduct.appendChild(card);
    }
}

function addToCart(e) {
    let indexOfproduct = e.target.id;
    let product = document.data[e.target.id];
    let card = document.createElement('div');
    card.classList = "card p-3 mt-3 flex row";

    let pNameSpan = document.createElement('span');
    pNameSpan.textContent = prod

}

function show() {
    load();
    display_products();
}

show();
