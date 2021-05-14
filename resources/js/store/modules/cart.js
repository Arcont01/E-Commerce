import vue from 'Vue';

export default {
    state: {
        cart: JSON.parse(localStorage.getItem('cart')) || []
    },
    getters: {
        allProducts: (state, getters) => {
            return state.cart
        },
        countProducts: (state, getters) => {
            return state.cart.length
        },
        totalPrice: (state, getters) => {
            let total = 0;
            if (state.cart.length > 0) {
                state.cart.forEach(product => {
                    let price = product.price * product.quantity;
                    total += price;
                })
            }
            return total
        }
    },
    mutations: {
        addToCart(state, payload) {
            if (state.cart.length <= 0) {
                if (payload.quantity) {
                    payload.product.quantity = payload.quantity;
                    state.cart.push(payload.product)
                } else {
                    payload.product.quantity = 1;
                    state.cart.push(payload.product)
                }
            } else {
                const exist = state.cart.some(p => p.id === payload.product.id);
                if(exist){
                    const index = state.cart.findIndex(p => p.id === payload.product.id);
                    if (payload.quantity) {
                        state.cart[index].quantity += payload.quantity;
                    } else {
                        state.cart[index].quantity += 1;
                    }
                }else {
                    if (payload.quantity) {
                        payload.product.quantity = payload.quantity;
                        state.cart.push(payload.product)
                    } else {
                        payload.product.quantity = 1;
                        state.cart.push(payload.product)
                    }
                }
            }
        },
        removeFromCart(state, id) {
            const index = state.cart.findIndex(p => p.id === id);
            state.cart.splice(index, 1);
        }
    },
    actions: {
        addToCart(context, payload){
            context.commit('addToCart', payload);
        },
        removeFromCart(context, id){
            context.commit('removeFromCart', id);
        }
    }
}
