const initialState = {
    status: 'idle',
    companies: null,
    error: null,
}

export default function companiesReducer(state = initialState, action) {
    switch(action.type) {
        // action to dispatch on Homepage load
        case "REQUEST_COMPANIES": {
            return {
                ...state,
                status: 'loading',
            }
        }
        // action to be dispatched when company list is received
        case "RECEIVE_COMPANIES": {
            return {
                ...state,
                companies: action.companies,
                status: 'idle',
            }
        }
        // action to be dispatched in case of error
        case "RECEIVE_COMPANIES_ERROR": {
            return {
                ...state,
                status: 'error',
                error: action.error,
            }
        }
        default: {
            return state;
        }
    }
}