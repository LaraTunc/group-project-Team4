const initialState = {
    status: 'idle',
    currentItems: null,
    error: null,
}

export default function itemGridReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH-ITEMS-DATA': {
            return {
                ...state,
                status: 'loading',
            }
        }
        case 'RECEIVE-ITEMS-DATA': {
            return {
                ...state,
                status: 'idle',
                currentItems: action.currentItems,
            }
        }
        case 'ERROR-ITEMS-DATA': {
            return{
                ...state,
                status: 'error',
            }
        }
        default: {
            return state;
        }
    }
}

export const getProductsArray = state =>
Object.values(state);