const initialState = [];

export default function myCartReducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_ITEM": {
            return [
                ...state,
                action.item
            ];
        }
        case "REMOVE_ITEM": {
            const index = state.indexOf(action.item);
            const array = state;
            if (index > -1) {
                array.splice(index, 1);
            };
            return array;
        }
        default: {
            return state;
        }
    }
}