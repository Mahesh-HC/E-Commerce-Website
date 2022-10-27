const cart = []

const handleCart = (state = cart, action) => {
   /* const product = action.payload
    switch (action.type) {
        case "ADDITEM":
            // check if Product is Already exist
            const exist = state.find((x) => x.id === product.id)
            if (exist) {
                // Increase the Quantity
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x)
            }
            else {
                const product = action.payload
                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,

                    }
                ]
            }
            break;

        case "DELITEM":
            const exist1 = state.find((x) => x.id === product.id)
            if (exist1.qty === 1) {
                return state.filter((x) => x.id !== exist1.id)
            }
            else {
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty - 1 } : x)
            }
            break;
        default:
            return state;
            break;
    }*/
    switch (action.type) {
        case "ADDITEM": return [
            ...state,
            action.payload
        ]
        // eslint-disable-next-line
        break;
        case "DELITEM":
            return state = state.filter((x)=>{
                return x.id !== action.payload.id
            })
            // eslint-disable-next-line
            break;
            default: return state;
            // eslint-disable-next-line
           break;
    }
}
export default handleCart