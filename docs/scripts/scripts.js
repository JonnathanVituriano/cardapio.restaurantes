// ===================================================================
// DADOS DO CARDÁPIO - EDITE APENAS ESTA PARTE PARA CADA CLIENTE
// ===================================================================

const menuData = {
    restaurantName: "Restaurante Exemplo",
    foods: [
        {
            name: "Buchada",
            price: "R$ 44,99",
            ingredients: "Carne de bode, Alho, Batatas Fritas",
            image: "./img/buchada.jpeg" // Coloque o caminho da imagem aqui
        },
        {
            name: "Arroz Guisado",
            price: "R$ 31,99",
            ingredients: "Carne de bode, Alho, Batatas Fritas",
            image: "./img/arrozguisado.jpg" // Deixe em branco se não houver imagem
        },
        {
            name: "Galinha Caipira",
            price: "39,99", // O R$ será adicionado automaticamente
            ingredients: "Carne de bode, Alho, Batatas Fritas",
            image: "./img/galinhacaipira.jpeg"
        }
    ],
    drinks: [
        {
            name: "Red Bull 250ml",
            price: "9,99",
            ingredients: "", // Sem ingredientes para bebidas
            image: "./img/redbull.jpeg"
        },
        {
            name: "Coca Cola Lata 250ml",
            price: "R$ 5,99",
            ingredients: "",
            image: "./img/coca.jpg"
        },
        {
            name: "Heineken Long Neck 330ml",
            price: "8,99",
            ingredients: "",
            image: "./img/heineken ln.jpg"
        }
    ]
};

// ===================================================================
// LÓGICA DO PROGRAMA - NÃO PRECISA EDITAR DAQUI PARA BAIXO
// ===================================================================

document.addEventListener('DOMContentLoaded', function() {
    const foodList = document.getElementById('lista-comidas');
    const drinkList = document.getElementById('lista-bebidas');
    const restaurantNameHeader = document.getElementById('restaurant-name-header');
    const restaurantNameFooter = document.getElementById('restaurant-name-footer');
    const pageTitle = document.querySelector('title');

    // Atualiza o nome do restaurante
    restaurantNameHeader.textContent = menuData.restaurantName;
    restaurantNameFooter.textContent = menuData.restaurantName;
    pageTitle.textContent = `Cardápio - ${menuData.restaurantName}`;

    // Função para criar o HTML de um item do menu
    function createMenuItemHTML(item) {
        // Formata o preço para sempre incluir "R$" se não tiver
        const formattedPrice = item.price.toString().includes('R$') ? item.price : `R$ ${item.price.replace('.', ',')}`;
        
        // Define uma imagem padrão ou texto se a imagem não existir
        const imageContent = item.image ? `<img src="${item.image}" alt="${item.name}">` : `<div class="placeholder-image">Imagem</div>`;
        
        // Esconde a linha de ingredientes se estiver vazia
        const ingredientsHTML = item.ingredients ? `<p class="menu-item-ingredients">${item.ingredients}</p>` : '';

        return `
            <div class="menu-item">
                ${imageContent}
                <div class="menu-item-details">
                    <h3>${item.name}</h3>
                    <p class="menu-item-price">${formattedPrice}</p>
                    ${ingredientsHTML}
                </div>
            </div>
        `;
    }

    // Carrega as comidas
    menuData.foods.forEach(food => {
        foodList.innerHTML += createMenuItemHTML(food);
    });

    // Carrega as bebidas
    menuData.drinks.forEach(drink => {
        drinkList.innerHTML += createMenuItemHTML(drink);
    });
});