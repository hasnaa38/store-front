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
            return {}
    }
}

export default categoriesReducer;