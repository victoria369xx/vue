
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        paymentsList: []
    },
    mutations: {
        setPaymentsListData (state, payload) {
            state.paymentsList = payload
        }
    },
    getters: {
        getPaymentsList: state => state.paymentsList,
        getPaymentsListFullAmount: state => {
            return state.paymentsList. reduce((res, cur) => res + cur.price, 0)
        }
    },
    actions: {
        fetchData({ commit }) {
            return new Promise ((resolve,reject)=>{
                setTimeout(()=> {
                    resolve([
                        { id: 1,
                         date:'2021-11-25',
                         category: 'Education',
                         price: 450
                       },
                       { id: 2,
                         date:'2021-11-22',
                         category: 'Internet',
                         price: 300
                       },
                       { id: 3,
                         date:'2021-11-21',
                         category: 'Food',
                         price: 120
                       },
                          {
                         id: 4,
                         date:'2021-11-20',
                         category: 'Education',
                         price: 450
                       },
                       {id: 5,
                         date:'2021-11-22',
                         category: 'Internet',
                         price: 300
                       },
                       { id: 6,
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
        }
    }
})