const initialState = {
    status: 'idle',
    currentItem: null,
}

export default function itemDetailsReducer(state = initialState, action) {
    switch(action.type) {
        // action to be dispatched when item is clicked
        case "REQUEST_ITEM_DETAILS": {
            return {
                ...state,
                status: 'loading',
            }
        }
        // action to be dispatched when item details are received
        case "RECEIVE_ITEM_DETAILS": {
            return {
                ...state,
                currentItem: action.currentItem,
                status: 'idle',
            }
        }
        // action to be dispatched when there's an error with the item
        case "RECEIVE_ITEM_DETAILS_ERROR": {
            return {
                ...state,
                status: 'error',
            }
        }
    }
}