export const GET_SEARCH_QUERY = 'GET_SEARCH_QUERY'
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USETS_FAILURE = 'GET_USERS_FAILURE'

export const getSearchQuery = (): Object => ({
    type: GET_SEARCH_QUERY,
})

export const setSearchQuery = (payload: string): Object => ({
    type: SET_SEARCH_QUERY,
    payload,
})

export const getUsers = () => ({
    type: GET_USERS,
})

export const getUsersFailure = () => ({
    type: GET_USETS_FAILURE
})

export const getUsersSuccess = (users: any) => ({
    type: GET_USERS_SUCCESS,
    payload: users
})

export const fetchUsers = () => {
    return async (dispatch: any) => {
        dispatch(getUsers())

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()

            dispatch(getUsersSuccess(data))
        } catch (err) {
            dispatch(getUsersFailure())
        }
    }
}
