const categoriesReducer = (state = {
    name: '',
    description: ''
}, action) => {
    switch (action.type) {
        case 'GET':
            console.log(action.payload)
            return {
                displayName: action.payload.category.name,
                description: action.payload.category.description
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