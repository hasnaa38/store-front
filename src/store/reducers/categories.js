const categoriesReducer = (state = {
    allCategories: [],
    currentCategory: {}
}, action) => {
    switch (action.type) {
        case 'INITIAL_GET':
            console.log(action.payload.categories)
            return {
                ...state,
                allCategories: action.payload.categories
            }
        case 'GET':
            let category = state.allCategories.filter(element => element.name.toLowerCase() === action.payload)[0];
            return {
                ...state,
                currentCategory: {
                    displayName: category.name,
                    description: category.description
                }
            }
        default:
            return state;
    }
}

export default categoriesReducer;

/*
const categoriesReducer = (state = {}, action) => {
    switch (action.type) {
        case 'BUTTON1':
            return {
                displayName: 'Fantasy',
                description: 'Fantasy Books Zone'
            }
        case 'BUTTON2':
            return {
                displayName: 'Fiction',
                description: 'Fiction Books Zone'
            }
        case 'BUTTON3':
            return {
                displayName: 'Horror',
                description: 'Horror Books Zone'
            }
        case 'BUTTON4':
            return {
                displayName: 'Science',
                description: 'Science Books Zone'
            }
        default:
            return state;
    }
}

export default categoriesReducer;
*/