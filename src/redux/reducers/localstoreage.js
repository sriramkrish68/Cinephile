export const localStorageReducer = (state = [], action) => {
    if (action.type === 'GET_ITEM') {
        localStorage.setItem("mylist", JSON.stringify([...state, ...action.payload]))
        return [...state, ...action.payload]
    } else if (action.type === 'DELETE_ITEM') {
        localStorage.setItem("mylist", JSON.stringify([...state.filter(item => item.id !== action.payload)]))
        return [...state.filter(item => item.id !== action.payload)]
    }
    else if (action.type === 'INTIAL_ITEM') {
        localStorage.setItem("mylist", JSON.stringify([...action.payload]))
        return [...action.payload]
    }
    return state
}