const oderPizza = async (hasIngredients) => {
    console.log("Pedido da pizza enviadfo para a cozinha...");

    if (!hasIngredients) {
        throw new Error("Ingredientes insuficientes no momento.");
    }

    await new Promise((resolve, reject) =>
        setTimeout(() => {
            const hasError = Math.random() < 0.4;

            if (hasError) {
                reject("Erro ao preparar a pizza.");
            } else {
                resolve("Pizza pronta!");
            }
        }, 3000)
    );

    return "Pizza pronta!";
};

// sumular um api que entrega a pizza
const deliverPizza = () => {
    return new Promise((resove) => {
        console.log("A pizza está a caminho...");

        setTimeout(() => {
            resove("Pizza entregue!");
        }, 1000);
    });
};

const makeOrder = async () => {
    try {
        const pizzaMessage = await oderPizza(true);
        console.log(pizzaMessage);

        const deliveryMessage = await deliverPizza();
        console.log(deliveryMessage);
    } catch (error) {
        console.error("Ocorreu um erro:", error);
    } finally {
        console.log("Obrigado por pedir conosco. Volte sempre!");
    }
};

makeOrder();
