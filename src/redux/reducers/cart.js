
const initialState = {
    isOpen: false,
    items: [],
    totalPrice: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_CART':
            return {
                ...state,
                isOpen: !state.isOpen
            }
        case 'CLOSE_CART':
            return {
                ...state,
                isOpen: false
            }
        case 'ADD_TO_CART':
            action.payload['id'] = state.items.length;
            console.log(action.payload);
            return {
                ...state,
                items: [...state.items, action.payload],
                totalPrice: state.totalPrice + Number(action.payload.price)
            }
        case 'REMOVE_FROM_CART':
            console.log(action.payload.id);
            
            return {
                ...state,
                items: state.items.filter((item) => item.id !== action.payload.id),
                totalPrice: state.totalPrice - Number(action.payload.price)
            }
        default:
            return state;
    }
}

export default cartReducer;