import Vue from 'vue'
import Vuex from 'vuex'

import { getProducts, getProduct } from '../services/product.service'

const mutations = {
    SET_PRODUCT(state, products){
        state.products = products
    },
    SET_ITEM(state, product){
        state.product = product
    }
}

const actions = {
    async fetchProducts({ commit }){
        try {
            const items = await getProducts()
            commit('SET_PRODUCT', items.data)
        } catch (error) {
            
        }
    },

    async fetchProduct({ commit }, id){
        try {
            const item = await getProduct(id)
            commit('SET_ITEM', item.data)
        } catch (error) {
            
        }
    }
}

const getters = {
    products : ({ products }) => products,
    product: ({ product }) => product
}

const state = () => ({
    products: [],
    product: {}
})

export default {
    mutations,
    actions,
    getters,
    state
}