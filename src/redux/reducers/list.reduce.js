export const listReduce = (state = [], action) => {
    if (action.type === 'ADD-TO_LIST') {
        return [...state, action.payload]
    } else if (action.type === 'REMOVE-TO_LIST') {
        return [...state.filter(item => item.imdbID !== action.payload.imdbID)]
    } else if (action.type === "ALL_LIST_EMPTY") {
        return []
    }
    return state
}