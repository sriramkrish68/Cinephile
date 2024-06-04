export const moviesReducer = (state = [], action) => {
    if (action.type === 'ADD-TO_DATA_STORE') return [action.payload]
    return state
}