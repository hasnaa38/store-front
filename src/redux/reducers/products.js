const faker = require('faker');

const productsReducer = (state=[], action) => {
    switch (action.type) {
        case 'BUTTON1':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }
            ]
        case 'BUTTON2':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }
            ]
        case 'BUTTON3':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }
            ]
        case 'BUTTON4':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: 38,
                    image: faker.image.nature()
                }
            ]

            case 'DECREMENT_STOCK':
                return state.map(item => {
                    if(item.name === action.payload.name){
                        item.inventoryCount--;
                    }
                    return item;
                });
        default:
            return state;
    }
}

export default productsReducer;

/*
name, description, price, inventory count
*/