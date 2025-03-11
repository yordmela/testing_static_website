// Fetch product data from products.json
fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const container = document.getElementById('products');
    products.forEach(product => {
      container.innerHTML += `
        <div class="product">
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <button onclick="contactOwner('${product.contact}')">Buy</button>
        </div>
      `;
    });
  });

// Function to display contact info
function contactOwner(email) {
  alert(`Contact the owner at: ${email}`);
}
