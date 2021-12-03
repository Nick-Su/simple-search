import * as actions from '../actions/searchQueriesActions'

export interface ISearchState {
    searchQuery: String | undefined,
    users: Array<Object> | undefined,
    loading: Boolean,
    hasErrors: Boolean,
}

export const initialState: ISearchState = {
    searchQuery: "",
    users: [],
    loading: false,
    hasErrors: false
}

export const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actions.SET_SEARCH_QUERY:
            return { ...state, searchQuery: action.payload }
        case actions.GET_USERS:
            return { ...state, loading: true }
        case actions.GET_USERS_SUCCESS:
            return { users: action.payload, loading: false, hasErrors: false }
        case actions.GET_USETS_FAILURE:
            return { ...state, loading: false, hasErrors: true }
        default:
            return state
    }
}
