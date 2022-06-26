import * as types from './actionTypes'
const initialState = {
    todos: [],
    isLoading: false,
    isError: false
}
const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.GET_TODO_LISTS_REQUEST:
            return {
                ...state,
                isLoading: true,
                isError: false
            }

        case types.GET_TODO_LISTS_SUCCESS:
            return {
                ...state,
                todos: payload,
                isLoading: false,
                isError: false
            }

        case types.GET_TODO_LISTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        default:
            return state
    }
}

export { reducer }