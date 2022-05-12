<template>
    <section class="grid">
        <ul>
            <li v-for="item in items" :key="item.id">
                id: {{item.id}} <br/>
                titolo originale: {{item.original_title ? item.original_title : item.original_name}} <br/>
                titolo: {{item.title ? item.title : item.name}} <br/>
                lingua: <country-flag :country='languages' size='small'/> <br/>
                voto: {{item.vote_average}} <br/>
                <img :src="imgBaseUrl+item.poster_path " alt="Poster del film">
            </li>
        </ul>
    </section>
</template>

<script>

import CountryFlag from 'vue-country-flag'
/* import {state, actions} from '../store.js' */
export default {
    name: 'GridComp',
    components: {
        CountryFlag
    },
    props:{
        items: Array,
        loading: Boolean,
    },
    data(){
        return {
            imgBaseUrl: 'https://image.tmdb.org/t/p/w342'
        }
        
    },
    methods:{
    
    },
    computed:{
        //ORA NON FUNZIONA MA FUNZIONERà DOPO
        /* languages(){
            if(this.items.original_language === 'en'){
                console.log(this.items.original_language)
                return 'gb'
            }else if(this.items.original_language === 'ja'){
                return 'jp'
            }else{
                console.log(this.items)
                console.log(this.items.original_language)
                return this.items.original_language
            }
        }, */
    }
}
</script>

<style lang="scss">
.grid {
    display: flex;
}
</style>