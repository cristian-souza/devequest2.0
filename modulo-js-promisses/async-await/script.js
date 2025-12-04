const oderPizza = () => {
    return new Promise((resolve) => {
        console.log("Pedido da pizza enviadfo para a cozinha...");

        setTimeout(() => {
            resolve("Pizza pronta!");
        }, 3000);
    });
};

// sumular um api que entrega a pizza
const deliverPizza = () => {
    return new Promise((resove) => {
        console.log("A pizza está a caminho...");

        setTimeout(() => {
            resove("Pizza entregue!");
        }, 1000);
    });
}

// oderPizza().then(message => {
//     console.log(message);

//     deliverPizza().then(message => {
//         console.log(message);
//     });
// });

const makeOrder = async () => {
    const pizzaMessage = await oderPizza();
    console.log(pizzaMessage);

    const deliveryMessage = await deliverPizza();
    console.log(deliveryMessage);
};

makeOrder();