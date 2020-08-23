//data set
//inside our store (initialstate) we have a basket represented as an array

export const initialState = {
    basket: [],
    user: null,
}
//selector example: incrimenting all prices inside of basket, starting at 0 and return that value
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);


// reducer example. manipulate data with actions
//mutible updates
const reducer = (state, action) => {
    console.log(action);

    //BASIC CRUD OPERATIONS if needed
    
}

export default reducer;