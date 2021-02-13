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
    error
})

// COMPANIES ACTION
export const requestCompanies = () => ({
    type: "REQUEST_COMPANIES",
})

export const receiveCompanies = (companies) => ({
    type: "RECEIVE_COMPANIES",
    companies,
})

export const receiveCompaniesError = (error) => ({
    type: "RECEIVE_COMPANIES_ERROR",
    error,
})