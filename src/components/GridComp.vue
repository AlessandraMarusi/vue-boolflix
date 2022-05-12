<template>
    <section>
        <!-- <ul>
            <li v-for="movie in movies" :key="movie.id">
            id: {{movie.id}} <br/>
            titolo originale: {{movie.original_title}} <br/>
            titolo: {{movie.title}} <br/>
            lingua: <country-flag :country='languageMovies' size='small'/> <br/>
            voto: {{movie.vote_average}} <br/>
            <img :src="imgBaseUrl+movie.poster_path " alt="Poster del film">
            </li>
        </ul>
        <ul>
            <li v-for="tvSerie in tvSeries" :key="tvSerie.id">
            id: {{tvSerie.id}} <br/>
            titolo originale: {{tvSerie.original_name}} <br/>
            titolo: {{tvSerie.name}} <br/>
            lingua: <country-flag :country='languageTvSeries' size='small'/> <br/>
            voto: {{tvSerie.vote_average}} <br/>
            <img :src="imgBaseUrl+tvSerie.poster_path " alt="Poster della serie tv">
            </li>
        </ul> -->
        <ul>
            <li v-for="item in items" :key="item.id">
                id: {{item.id}} <br/>
                titolo originale: {{item.original_title ? item.original_title : item.original_name}} <br/>
                titolo: {{item.title ? item.title : item.name}} <br/>
                lingua: <country-flag :country='languageMovies' size='small'/> <br/>
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
            movies: [],
            tvSeries: [],
            imgBaseUrl: 'https://image.tmdb.org/t/p/w342'
        }
        
    },
    watch:{
        items(){
            console.log(items)
            /* this.movies = this.items[0].data.results
            this.tvSeries = this.items[1].data.results */
            console.log(this.tvSeries)
        }
    },
    methods:{
        /* language(){
            if(item.original_language === 'en'){
                return item.original_language = 'gb'
            }else if(item.original_language === 'ja'){
                return item.original_language = 'jp'
            }else{
                return item.original_language
            }
        }, */
        /* leggi(){
            actions.setSearch('aaaa')
        } */

        // Vue Cli ha detto no.
        /* getImgUrl(language){
            var imageExists = require('image-exists');
            var src = require('../assets/images/'+language+'.jpg')
            imageExists(src, function(exists) {
            if (exists) {
                console.log("ESISTE")
                return require('../assets/images/'+language+'.jpg')
            }
            else {
                console.log("NON ESISTE")
                return require('../assets/images/notFound.png');
            }
            });
        }, */
    },
    computed:{
        /* languageMovies(){
            if(this.movies.original_language === 'en'){
                return 'gb'
            }else if(this.movies.original_language === 'ja'){
                return 'jp'
            }else{
                return this.movies.original_language
            }
        },
        languageTvSeries(){
            if(this.tvSeries.original_language === 'en'){
                return 'gb'
            }else if(this.tvSeries.original_language === 'ja'){
                return 'jp'
            }else{
                return this.tvSeries.original_language
            }
        }, */
        languages(){
            if(this.items.original_language === 'en'){
                return 'gb'
            }else if(this.items.original_language === 'ja'){
                return 'jp'
            }else{
                return this.items.original_language
            }
        },
    }
}
</script>

<style lang="scss">
.prova {
    display: flex;
}
</style>