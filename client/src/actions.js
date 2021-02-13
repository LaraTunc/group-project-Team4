// ITEM DETAILS ACTION
export const requestItemDetails = () => ({
    type: "REQUEST_ITEM_DETAILS",
})

export const receiveItemDetails = (currentItem) => ({
    type: "RECEIVE_ITEM_DETAILS",
    currentItem,
})

export const receiveItemDetailsError = (error) => ({
    type: "RECEIVE_ITEM_DETAILS_ERROR",
    error,
})
    
export const fetchItemsData = () => ({
    type: 'FETCH-ITEMS-DATA',
})

export const receiveItemsData = (currentItems) => ({
    type:  'RECEIVE-ITEMS-DATA',
    currentItems,
})

export const receiveItemsDataError = (error) => ({
    type: 'ERROR-ITEMS-DATA',
    error,
})

