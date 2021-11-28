
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: [],
        newDataFromForm: {
            date: '',
            category: '',
            price: 0
        }
    },
    mutations: {
        setPaymentsListData (state, payload) {
            state.paymentsList = payload
        },
        setNewDataOnPaymentsList (state, payload) {
            state.newDataFromForm = payload
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getNewDataOnList: state => state.newDataFromForm

    },
    actions: {
        fetchData({ commit }) {
            return new Promise ((resolve,reject)=>{
                setTimeout(()=> {
                    resolve([
                        { 
                         date:'2021-11-25',
                         category: 'Education',
                         price: 450
                       },
                       { 
                         date:'2021-11-22',
                         category: 'Internet',
                         price: 300
                       },
                       { 
                         date:'2021-11-21',
                         category: 'Food',
                         price: 120
                       },
                          {
                         
                         date:'2021-11-20',
                         category: 'Education',
                         price: 450
                       },
                       {
                         date:'2021-11-22',
                         category: 'Internet',
                         price: 300
                       },
                       { 
                         date:'2021-11-22',
                         category: 'Food',
                         price: 120
                       }
                       ])
                },1000)
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
        },
        saveNewData({commit}){
            commit('setNewDataOnPaymentsList', 'getNewDataOnList')
        }
    }
})