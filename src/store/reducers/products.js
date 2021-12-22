const productsReducer = (state = {
    allBooks: [],
    categoryBooks: [],
    currentProduct: {}
}, action) => {
    switch (action.type) {
        case 'INITIAL_GET':
            return {
                ...state,
                allBooks: action.payload.result
            };
        case 'GET':
            let result = state.allBooks.filter(item => item.category === action.payload);
            return {
                ...state,
                categoryBooks: result
            };
        case 'DECREMENT_STOCK':
            return state.map(item => {
                if (item.name === action.payload.name) {
                    item = action.payload;
                }
                return item;
            });
        case 'CURRENT_PRODUCT':
            console.log(action)
            return {
                ...state,
                currentProduct: action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;
/*
const productsReducer = (state=[], action) => {
    switch (action.type) {
        case 'BUTTON1':
            return [
                {
                    name: 'Lord of the Rings',
                    description: 'an epic high-fantasy novel by English author and scholar J. R. R. Tolkien.',
                    price: 30,
                    inventoryCount: 38,
                    image: 'https://m.media-amazon.com/images/I/51waks01PAL.jpg'
                }, {
                    name: 'The Eye of the World',
                    description: 'a high fantasy novel by American writer Robert Jordan',
                    price: 40,
                    inventoryCount: 38,
                    image: 'https://pictures.abebooks.com/isbn/9781857230765-us.jpg'
                }, {
                    name: 'The Name of the Wind',
                    description: 'also referred to as The Kingkiller Chronicle',
                    price: 35,
                    inventoryCount: 38,
                    image: 'https://images-na.ssl-images-amazon.com/images/I/71jJcPTGd3L.jpg'
                }
            ]
        case 'BUTTON2':
            return [
                {
                    name: 'Nineteen Eighty-Four',
                    description: 'a dystopian social science fiction novel and cautionary tale written by English writer George Orwell',
                    price: 20,
                    inventoryCount: 38,
                    image: 'https://target.scene7.com/is/image/Target/GUEST_6e183a54-a629-416b-83fc-5e54f3578d38?wid=488&hei=488&fmt=pjpeg'
                }, {
                    name: 'The Handmaid\'s Tale: The Graphic Novel',
                    description: 'A worthy adaptation of a legendary and award-winning novel.',
                    price: 25,
                    inventoryCount: 38,
                    image: 'https://images-na.ssl-images-amazon.com/images/I/91pUKCpAzUL.jpg'
                }, {
                    name: 'The Great Gatsby',
                    description: 'a novel by American writer F. Scott Fitzgerald',
                    price: 20,
                    inventoryCount: 38,
                    image: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg'
                }
            ]
        case 'BUTTON3':
            return [
                {
                    name: 'Ghost Story',
                    description: 'a horror novel by American writer Peter Straub',
                    price: 20,
                    inventoryCount: 38,
                    image: 'https://m.media-amazon.com/images/I/51C8RzZwQ3L.jpg'
                }, {
                    name: 'A Head Full of Ghosts',
                    description: 'a horror novel by American writer Paul G. Tremblay.',
                    price: 24,
                    inventoryCount: 38,
                    image: 'https://media.titanbooks.com/catalog/products/9011/Untitled_1.jpg'
                }, {
                    name: 'The Only Good Indians',
                    description: 'a 2020 horror novel by Stephen Graham Jones.',
                    price: 30,
                    inventoryCount: 38,
                    image: 'https://media.titanbooks.com/catalog/products/OnlyGoodIndians.jpg'
                }
            ]
        case 'BUTTON4':
            return [
                {
                    name: 'Cosmos',
                    description: 'a 1980 popular science book by astronomer and Pulitzer Prize-winning author Carl Sagan.',
                    price: 80,
                    inventoryCount: 38,
                    image: 'https://images.penguinrandomhouse.com/cover/9780345539434'
                }, {
                    name: 'Breath: The New Science of a Lost Art',
                    description: 'a 2020 popular science book by journalist James Nestor.',
                    price: 74,
                    inventoryCount: 38,
                    image: 'https://m.media-amazon.com/images/I/41o5B3nR1gL.jpg'
                }, {
                    name: 'Silent Spring',
                    description: 'an environmental science book by Rachel Carson.',
                    price: 50,
                    inventoryCount: 38,
                    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/SilentSpring.jpg/220px-SilentSpring.jpg'
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

*/