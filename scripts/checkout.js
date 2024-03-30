const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    
    const product = event.target.parentNode;
    const productName = product.querySelector('h2').innerText;
    const productImage = product.querySelector('img').src;
    const descricao = product.querySelector('p:nth-child(3)').innerText;
    const preco = product.querySelector('p:nth-child(4)').innerText;

    // Cria um objeto para representar o produto
    const productData = {
        name: productName,
        image: productImage,
        descricao: descricao,
        price: preco,
        quantidade: 1
    };

    // Obtém o carrinho atual do armazenamento local ou cria um novo array vazio
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(`Cart_Log: ${ cart}`);

    var repetido = false;
    cart.forEach(item => {
        if (item.name === productData.name) {
           // item.quantidade += 1;
            repetido = true;
        }
    });

    if (repetido == false) {
        cart.push(productData);
    }

    // Adiciona o produto ao carrinh0

    // Salva o carrinho atualizado de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);

}