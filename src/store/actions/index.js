const axios = require('axios');
const URL = 'https://h3-store-app.herokuapp.com';

// Async get products Redux:

export const get = (category) => dispatch => {
    return axios.get(`${URL}/books`).then(res => {
        let result = res.data.filter(book => book.category === category && book.inventoryCount > 0);
        axios.get(`${URL}/categories`).then(res2 => {
            console.log(res2.data)
            let result2 = res2.data.filter(item => item.name.toLowerCase() === category);
            dispatch({
                type: 'GET',
                payload: {
                    category: result2[0],
                    result: result
                }
            });
        })
    });
}

// products actions:

export const decrementStock = (item) => dispatch => {
    item.inventoryCount--;
    return axios.put(`${URL}/books/${item.id}`, item).then(res => {
        dispatch({
            type: 'DECREMENT_STOCK',
            payload: res.data
        });
    });
}

// cart actions:

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const removeFromCart = (item) => dispatch => {
    item.inventoryCount++;
    let uniqueID = item.uniqueID;
    return axios.put(`${URL}/books/${item.id}`, item).then(res => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: {
                item: res.data,
                uniqueID: uniqueID
            }
        });
    });
}

export const openCart = () => {
    return {
        type: 'OPEN_CART'
    }
}

export const closeCart = () => {
    return {
        type: 'CLOSE_CART'
    }
}



// OLD categories actions:

// export const button1Action = () => {
//     return {
//         type: 'BUTTON1'
//     }
// }

// export const button2Action = () => {
//     return {
//         type: 'BUTTON2'
//     }
// }

// export const button3Action = () => {
//     return {
//         type: 'BUTTON3'
//     }
// }

// export const button4Action = () => {
//     return {
//         type: 'BUTTON4'
//     }
// }