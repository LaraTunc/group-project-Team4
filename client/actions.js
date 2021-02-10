

// ITEM DETAILS ACTION
export const requestItemDetails = () => ({
    type: "REQUEST_ITEM_DETAILS",
})

export const receiveItemDetails = () => ({
    type: "RECEIVE_ITEM_DETAILS",
    currentItem,
})

export const receiveItemDetailsError = () => ({
    type: "RECEIVE_ITEM_DETAILS_ERROR",
})
