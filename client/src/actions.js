// ITEM DETAILS ACTION
export const requestItemDetails = () => ({
  type: "REQUEST_ITEM_DETAILS",
});

export const receiveItemDetails = (currentItem) => ({
  type: "RECEIVE_ITEM_DETAILS",
  currentItem,
});

export const receiveItemDetailsError = (error) => ({
  type: "RECEIVE_ITEM_DETAILS_ERROR",
});

// COMPANIES ACTION
export const requestCompanies = () => ({
  type: "REQUEST_COMPANIES",
});

export const receiveCompanies = (companies) => ({
  type: "RECEIVE_COMPANIES",
  companies,
});

export const receiveCompaniesError = (error) => ({
  type: "RECEIVE_COMPANIES_ERROR",
  error,
});

// ITEM GRID ACTION
export const requestItems = () => ({
  type: "REQUEST_ITEMS",
});

export const receiveItems = (currentItems) => ({
  type: "RECEIVE_ITEMS",
  currentItems,
});

export const receiveItemsError = (error) => ({
  type: "RECEIVE_ERROR_ITEMS",
  error,
});

// CART ACTIONS
export const addItem = (item) => ({
  type: "ADD_ITEM",
  item,
});

export const removeItem = (item) => ({
  type: "REMOVE_ITEM",
  item,
});

export const clearItems = () => ({
  type: "CLEAR_ITEMS",
});
