const instruments = [
    {
        id: 1,
        img: "Шуруповерт"б
        price: 150,
        description: "Мережевий дриль-шуруповерт - надійний помічник"
    },
    {
        id: 2,
        img: "Шліфмашина"б
        price: 1299,
        description: "Кутова шліфмашина - надійний помічник"
    },
    {
        id: 3,
        img: "Пила"б
        price: 111049,
        description: "Мобільна акумуляторналанцюгова пила - надійний помічник"
    },
]
const PRODUCT_LS = "basket";
const container = document.querySelector(".js-list");
container.insertAdjacentHTML("beforeend", createMarkup(instruments)); //const {id, img, name, price, description} = item
container.addEventListener("click", handleClick);

function createMarkup(arr) {
    return arr.map(({ id, img, name, price, description }) => `
        <li class="product-card js-product" data-id="${id}">
            <img src="${img}" alt="${name}" class="product-img"></img>
            <h2 class="product-title">${name}</h2>
            <p class="product-description">${description}</p>
            <p class="product-price">${price} грн</p>
            <button calass="product-add-btn js-btn>Add to basket</button>
        </li>
        `).join("")
}

function handleClick(event) {
    if (!event.target.classlist.contain(".js-btn")) {
        return;
    }
    // console.log(ok);

    const product = event.target.closest(".js-product"); //викликає найближчий батьк.елемент, у нас це лішка
    const productId = Number(product.dataset.id); //витягаємо id з лішки (товару)
    const currentProduct = instruments.find(({ id }) => id === productId);
    // console.log(currentProduct);
    const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) || [];
    // треба перевірити чи є в масиві products товар по якому ми клікнули
    const index = products.findIndex(({ id }) => id === productId); //якщо товар є, то нам видасть його індекс, якщо немає, то видасть "-1"
    if (index === -1) {
        currentProduct.quantity = 1;
        products.push(currentProduct)
    } else {
        products[index].quantity += 1;
    }
    alert(`додали ${currentProduct.name}`)
    localStorage.setItem(PRODUCT_LS, JSON.stringify(products))

}