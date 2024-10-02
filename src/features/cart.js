

// const cartState = [
//     {
//         product: {name : 'keps', price : 129.0},
//         count : 1
//     },
//     {
//         product: {name : 'byxor', price : 324.0},
//         count : 1
//     }

// ]


//dispatch(addToCart(item))

//dispatch(increaseAmount(item))


const cartSlice = createSlice({
    name : "cart",
    initialState: [],
    reducers: {
        // om varan inte finns i kundvagnen
        // -> kopia av det som fanns i kundvagne + lägg till item på slutet
        // om varan redan finns i kundvagne
        // -> öka count på just den varan med 1

        addToCart : (state, action) => {
            const found = state.find(cartItem => cartItem.product.name === action.payload.name);
            if (found) {
                // om produkten finns i vår kundvagn
                const newState = state.map( cartItem => {
                    if (cartItem.product.name == action.payload.name) {
                        return { ...cartItem, count: cartItem.count + 1}
                    } else {
                        return cartItem;
                    }
                })
                return newState;
            } else {
                // om produkten inte finns i kundvagnen
                return [...state, {product: action.payload, count: 1}];
            }
        },
        increaseAmount : (state, action) => {
            const newState = state.map( cartItem => {
                if (cartItem.product.name == action.payload.name) {
                    return { ...cartItem, count: cartItem.count + 1}
                } else {
                    return cartItem;
                }
            })
            return newState;
        },
        // ToDo: om count blir 0 så ska objectet tas bort
        decreaseAmount : (state, action) => {
            const newState = state.map( cartItem => {
                if (cartItem.product.name == action.payload.name) {
                    return { ...cartItem, count: cartItem.count - 1}
                } else {
                    return cartItem;
                }
            })
            return newState;
        },
        removeFromCart : (state, action) => {
            let newState = [];
            state.forEach(cartItem => {
                if (cartItem.product.name !== action.payload.name) {
                    newState.push(cartItem);
                }
            })
            return newState;
        }

    }
})

