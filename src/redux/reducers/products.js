const faker = require('faker');


const productsReducer = (state=[], action) => {
    switch (action.type) {
        case 'BUTTON1':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }
            ]
        case 'BUTTON2':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }
            ]
        case 'BUTTON3':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }
            ]
        case 'BUTTON4':
            return [
                {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }, {
                    name: faker.commerce.productName(),
                    description: faker.commerce.productDescription(),
                    price: faker.commerce.price(),
                    inventoryCount: faker.datatype.number(),
                    image: faker.image.nature()
                }
            ]
        default:
            return []
    }
}

export default productsReducer;

/*
name, description, price, inventory count
*/