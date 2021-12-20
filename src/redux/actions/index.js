export const button1Action = () => {
    return {
        type: 'BUTTON1'
    }
}

export const button2Action = () => {
    return {
        type: 'BUTTON2'
    }
}

export const button3Action = () => {
    return {
        type: 'BUTTON3'
    }
}

export const button4Action = () => {
    return {
        type: 'BUTTON4'
    }
}

// products actions:

export const decrementStock = (item) => {
    return {
        type: 'DECREMENT_STOCK',
        payload: item
    }
}

// cart actions:

export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
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
