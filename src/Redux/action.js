import * as types from './actionTypes'

const getTodoListsRequest = () => {
    return {
        type: types.GET_TODO_LISTS_REQUEST,
    }
}

const getTodoListsSuccess = () => {
    return {
        type: types.GET_TODO_LISTS_SUCCESS,
    }
}

const getTodoListsFailure = () => {
    return {
        type: types.GET_TODO_LISTS_FAILURE,
    }
}

export { getTodoListsFailure, getTodoListsRequest, getTodoListsSuccess }