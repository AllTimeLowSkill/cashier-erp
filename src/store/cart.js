import Vue from 'vue'
import Vuex from 'vuex'

import { getPaymentIntent } from '../services/payment.service'

const mutations = {
    ADD_ITEM(state, item){
        state.cart.push(item)
    },

    DELETE_ITEM(state, id){
        state.cart.splice(id, 1)
    }
}

const actions = {
    async handleBuy({ getters }){
        try {
            const intent = await getPaymentIntent({ amount: getters.total })
            return intent.data
        } catch (error) {
            
        }
    }
}

const getters = {
    cart: ({ cart }) => cart,
    cartCount: ({ cart }) => cart.length,
    total: ({ cart }) => {
        let sum = 0
        cart.forEach(el => {
          sum += el.price  
        })

        return sum
    }
}

const state = () => ({
    cart: [],
    cartCount: 0,
    total: 0
    
})

export default {
    mutations,
    actions,
    getters,
    state
}