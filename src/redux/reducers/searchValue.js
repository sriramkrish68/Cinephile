export const searchIntialValue = (state = ["avengers"], action) => {
    if (action.type === 'CHANGE_FIRTS_SEARCH_VALUE') {
        return [action.payload]
    }
    return state
}