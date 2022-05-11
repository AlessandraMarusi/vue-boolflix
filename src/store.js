// PROVA DI STORE

import Vue from 'vue';


//la creo e poi la duplico così da avere sempre _state originale, e modificare solo la copia
const _state = Vue.observable({
    search: '',
    species: []
})

//non è necessario far la copia, ma è meglio
const state = ()=>({..._state});

//check
const actions = {
    setSearch(val){
        _state.search = val;
    },
    setSpecies(val){
        _state.species = val;
    }
}
export {state, actions};