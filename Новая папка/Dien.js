let cartItems = []; // Массив для хранения товаров в корзине

// Функция для добавления товара в корзину
function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

// Функция для обновления содержимого корзины
function updateCart() {
    let cartList = document.getElementById('cartItems');
    cartList.innerHTML = '';

    let totalPrice = 0;
    cartItems.forEach(item => {
        let listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(listItem);

        totalPrice += item.price;
    });

    document.getElementById('totalPrice').textContent = `Общая сумма: $${totalPrice}`;

    if (cartItems.length > 0) {
        document.getElementById('cart').classList.remove('hidden');
    } else {
        document.getElementById('cart').classList.add('hidden');
    }
}

// Функция для применения фильтров
function applyFilters() {
    let categoryFilter = document.getElementById('categoryFilter').value;
    let searchInput = document.getElementById('searchInput').value.toLowerCase();
    let products = document.querySelectorAll('.product');

    products.forEach(product => {
        let productCategory = product.getAttribute('data-category').toLowerCase();
        let productName = product.querySelector('h2').textContent.toLowerCase();
        if ((categoryFilter === 'all' || productCategory === categoryFilter) &&
            (productName.includes(searchInput))) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

// Функция для оформления заказа
function checkout() {
    // Реализация оформления заказа
    alert('Ваш заказ успешно оформлен!');
    cartItems = []; // Очищаем корзину после оформления заказа
    updateCart(); // Обновляем содержимое корзины
}

// Функция для открытия корзины
document.getElementById('openCartBtn').addEventListener('click', function() {
    document.getElementById('cart').classList.toggle('hidden');
});

// Применяем фильтры при загрузке страницы
applyFilters();
