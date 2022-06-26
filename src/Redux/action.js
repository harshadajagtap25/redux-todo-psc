import * as types from './actionTypes'

const getTodoListsRequest = () => {
    return {
        type: types.GET_TODO_LISTS_REQUEST,
    }
}

const getTodoListsSuccess = (payload) => {
    return {
        type: types.GET_TODO_LISTS_SUCCESS, payload
    }
}

const getTodoListsFailure = () => {
    return {
        type: types.GET_TODO_LISTS_FAILURE,
    }
}

const addTodoRequest = () => {
    return {
        type: types.ADD_TODO_REQUEST,
    }
}

const addTodoSuccess = (payload) => {
    return {
        type: types.ADD_TODO_SUCCESS, payload
    }
}

const addTodoFailure = () => {
    return {
        type: types.ADD_TODO_FAILURE,
    }
}

const toggleTodoRequest = () => {
    return {
        type: types.TOGGLE_TODO_REQUEST,
    }
}

const toggleTodoSuccess = (payload) => {
    return {
        type: types.TOGGLE_TODO_SUCCESS, payload
    }
}

const toggleTodoFailure = () => {
    return {
        type: types.TOGGLE_TODO_FAILURE,
    }
}

const deleteTodoRequest = () => {
    return {
        type: types.DELETE_TODO_REQUEST,
    }
}

const deleteTodoSuccess = (payload) => {
    return {
        type: types.DELETE_TODO_SUCCESS, payload
    }
}

const deleteTodoFailure = () => {
    return {
        type: types.DELETE_TODO_FAILURE,
    }
}
const editTodoRequest = () => {
    return {
        type: types.EDIT_TODO_REQUEST,
    }
}

const editTodoSuccess = (payload) => {
    return {
        type: types.EDIT_TODO_SUCCESS, payload
    }
}

const editTodoFailure = () => {
    return {
        type: types.EDIT_TODO_FAILURE,
    }
}

export {
    getTodoListsFailure,
    getTodoListsRequest,
    getTodoListsSuccess,
    addTodoRequest,
    addTodoSuccess,
    addTodoFailure,
    toggleTodoRequest,
    toggleTodoSuccess,
    toggleTodoFailure,
    deleteTodoSuccess,
    deleteTodoFailure,
    deleteTodoRequest,
    editTodoRequest,
    editTodoSuccess,
    editTodoFailure
}