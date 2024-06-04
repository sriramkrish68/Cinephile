export const getMovies = (payload) => {
    return { type: 'ADD-TO_DATA_STORE', payload: payload }
}


export const addToList = (payload) => {
    return { type: 'ADD-TO_LIST', payload: payload }
}

export const removeToList = (payload) => {
    return { type: 'REMOVE-TO_LIST', payload: payload }
}

export const listIsEmpty = () => {
    return { type: 'ALL_LIST_EMPTY' }
}

export const searchIntialValueAction = (payload) => {
    return { type: 'CHANGE_FIRTS_SEARCH_VALUE', payload: payload }
}

export const localStorageAction = (payload) => {
    return { type: 'GET_ITEM', payload: payload }
}
export const localStorageDeleteAction = (payload) => {
    return { type: 'DELETE_ITEM', payload: payload }
}

export const localStorageIntialAction = (payload) => {
    return { type: 'INTIAL_ITEM', payload: payload }
}