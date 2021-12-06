
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: {},
        newFormData: {
            date: '',
            category: '',
            price: 0
        },
        currentPage: 1
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
         setCurrentPage (state, payload) {
             state.currentPage = payload
         }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getFormDataToList: state => {
            return state.newFormData
        },
        getCurrentPage: state => state.currentPage

    },
    actions: {
        fetchData({ commit}) {
            return new Promise ((resolve,reject)=>{
                setTimeout(()=> {
                    const dataBase = {
                        1: [
                         {id:1, date: "2021/11/21", category:"Food", price: 300},
                         {id:2, date: "2021/10/10", category:"Internet", price: 230},
                         {id:3, date: "2021/11/01", category:"Food", price: 234}
                        ],
                        2: [
                         {id:1, date: "2021/11/21", category:"Food", price: 300},
                         {id:2, date: "2021/10/10", category:"Internet", price: 230},
                         {id:3, date: "2021/11/01", category:"Food", price: 234}
                        ]
                     }
                    resolve(dataBase)
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