
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
        },
        deleteItem (state, payload) {
            state.paymentsList = state.paymentsList.filter(item => item.id !== payload )
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFormDataToList: state => {
            return state.newFormData
        }

    },
    actions: {
        fetchData({ commit}) {
            return new Promise ((resolve,reject)=>{
                setTimeout(()=> {
                    const items = [
                        {id:1, date: "2021/11/21", category:"Food", price: 300},
                        {id:2, date: "2021/10/10", category:"Internet", price: 123},
                        {id:3, date: "2021/11/01", category:"Food", price: 867},
                        {id:4, date: "2021/11/21", category:"Education", price: 430},
                        {id:5, date: "2021/10/10", category:"Health", price: 453},
                        {id:6, date: "2021/11/01", category:"Food", price: 234},
                        {id:7, date: "2021/11/21", category:"Books", price: 768},
                        {id:8, date: "2021/10/10", category:"Internet", price: 123},
                        {id:9, date: "2021/11/01", category:"Food", price: 234},
                        {id:10, date: "2021/11/01", category:"Transport", price: 784},
                    ]
                
                    resolve(items)
                },300)
                setTimeout(() => reject(new Error("some error occured")), 2000);
            })
            .then(
                res => {
                commit('setPaymentsListData', res)
                },
                error => {
                    console.log('Error', error)
                }
           )
        }

    }
})