console.log("Welcome to Megasupersite");
fetch('data/pizzas.json')
    .then(response => response.json())
    .then(data => {
        const pizzaId = 14; 
        const pizza = data.find(p => p.id === pizzaId);
        if (pizza) {
            const container = document.querySelector('#some-section'); // найдите подходящий контейнер
            const block = document.createElement('div');
            block.className = 'pizza-description';

            // добавьте содержимое
            block.innerHTML = `
        <h2>${pizza.name}</h2>
        <img src="img/pizza_${String(pizza.id).padStart(2, '0')}.jpg" alt="${pizza.name}" class="pizza-img">
        <p>${pizza.description}</p>
        <div class="author-info">
          <img src="img/IS22B_kuruch_II.jpg" alt="Автор" class="author-img">
          <p>Автор: Куруч Дмитрий Александрович</p>
        </div>
      `;

            // вставляем блок
            document.querySelector('#some-section').appendChild(block);
        }
    });