
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        newFormData: {
            date: '',
            category: '',
            price: 0
        }
    },
    mutations: {
        setPaymentsListData (state, payload) {
            state.paymentsList = payload
        },
        setFormData (state, payload) {
            state.newFormData = payload
        },
        addFormDataToList( state, payload) {
            state.paymentsList.push(payload)
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFormDataToList: state => {
            return state.newFormData
        } 

    },
    actions: {
        

    }
})