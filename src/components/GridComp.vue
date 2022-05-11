<template>
    <div><ul>
        <li v-for="item in items" :key="item.id">
          id: {{item.id}} <br/>
          titolo originale {{item.original_title}} <br/>
          titolo: {{item.title}} <br/>
          lingua: {{item.original_language}} <br/>
          <img :src="require('../assets/images/'+item.original_language+'.jpg')" alt="">
          voto: {{item.vote_average}} <br/>
        </li>
      </ul></div>
</template>

<script>
/* import {state, actions} from '../store.js' */
export default {
    name: 'GridComp',
    props:{
        items: Array,
        loading: Boolean,
    },
    /* data(){
        return
        
    }, */
    computed:{
        /* mySearch(){
            return state.search
        } */
    },
    methods:{
        /* leggi(){
            actions.setSearch('aaaa')
        } */
    }
}
</script>

<style lang="scss">

</style>