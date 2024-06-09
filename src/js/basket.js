const PRODUCT_LS = "basket";
const container = document.querySelector(".js-list");
const totalPrice = document.querySelector(".js-total-price");
const clear = document.querySelector(".js-clear");

const products = JSON.parse(localStorage.getItem(PRODUCT_LS)) || [];
let totalCost;

if (products.length) {
    clear.hidden = false;
    totalCost = products.reduce((acc, { quantity, price }) => acc += quantity * price, 0); //можна робити методом reduce або forEach
}
// console.log(totalCost);
totalPrice.textContent = totalCost ? `Загальна вартість ${totalCost} грн` : "Кошик порожній"
container.insertAdjacentHTML("beforeend", createMarcup(products));
clear.addEventListener("click", handleClear)

function createMarcup(arr) { //якщо потрібно мати можливість кожен товар удаляти з корзини, то потрібен нижче ще id в деструктуризацію
    return arr.map(({ img, name, price, quantity }) => `
    <li class="cart-item">
        <img src="${img}" alt="${name}" class="product-img">
        <h2>${name}</h2>
        <p>Кількість: ${quantity}</p>
        <p>Загальна вартість: ${quantity * price} грн</p>
    </li>
    `).join("")
}

function handleClear() {
    localStorage.removeItem(PRODUCT_LS);
    window.location.href = "../tasks/shop.html";

}