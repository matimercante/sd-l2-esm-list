import { getProductSortedByPrice } from "./products-model.js";
export function productsListComponent() {
    const products = getProductSortedByPrice();
    const section = document.createElement("section");
    section.style.border = "solid 1px #ccc";
    section.style.padding = "10px";
    const list = document.createElement("ul");
    products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.title} - $${product.price}`;
        list.appendChild(listItem);
    });
    section.appendChild(list);
    return section;
}
