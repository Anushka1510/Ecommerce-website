document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('/api/products');
    const products = await response.json();

    const productContainer = document.getElementById('products');
    productContainer.innerHTML = products.map(product => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="price">$${product.price}</div>
        </div>
    `).join('');
});
