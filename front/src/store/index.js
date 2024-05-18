import Vue from 'vue'
import Vuex from 'vuex'

export default new Vuex.Store({
  state: {  
    plataforms: [],
    proveedors: [],
    customers: [],
    counts: []
  },
  
  mutations: {  //Funciones para cambiar el valor de las variables
    actualizaritems1(state, nuevaplat) {
      state.plataforms = nuevaplat;
    },
    actualizaritems2(state, nuevoprov) {
      state.proveedors = nuevoprov;
    },
    actualizaritems3(state, nuevouser) {
      state.customers = nuevouser;
    },

    actualizarcuentas(state, nuevacuenta) {
      state.counts = nuevacuenta;
    },

  },


  actions: {  //Funciones para realizar acciones asincronas y llamar a mutaciones
    actualizaritems1({ commit }, nuevaplat) {
      commit('actualizaritems1', nuevaplat);
    },
    actualizaritems2({ commit }, nuevoprov) {
      commit('actualizaritems2', nuevoprov);
    },
    actualizaritems3({ commit }, nuevouser) {
      commit('actualizaritems3', nuevouser);
    },
    actualizarcuentas({ commit }, nuevacuenta) {
      commit('actualizarcuentas', nuevacuenta);
    },

    
   
  }
})
