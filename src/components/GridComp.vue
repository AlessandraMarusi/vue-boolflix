<template>
    <div class="prova">
        <ul>
            <li v-for="movie in movies" :key="movie.id">
            id: {{movie.id}} <br/>
            titolo originale: {{movie.original_title}} <br/>
            titolo: {{movie.title}} <br/>
            lingua: {{movie.original_language}} <br/>
            <img :src="require('../assets/images/'+movie.original_language+'.jpg')" alt="">
            voto: {{movie.vote_average}} <br/>
            </li>
      </ul>
      <ul>
            <li v-for="tvSerie in tvSeries" :key="tvSerie.id">
            id: {{tvSerie.id}} <br/>
            titolo originale: {{tvSerie.original_name}} <br/>
            titolo: {{tvSerie.name}} <br/>
            lingua: {{tvSerie.original_language}} <br/>
            <img :src="require('../assets/images/'+tvSerie.original_language+'.jpg')" alt="">
            voto: {{tvSerie.vote_average}} <br/>
            </li>
      </ul>
    </div>
</template>

<script>
/* import {state, actions} from '../store.js' */
export default {
    name: 'GridComp',
    props:{
        items: Array,
        loading: Boolean,
    },
    data(){
        return {
            movies: [],
            tvSeries: [],
        }
        
    },
    watch:{
        items(){
            this.movies = this.items[0].data.results
            this.tvSeries = this.items[1].data.results
            console.log(this.tvSeries)
        }
    },
    methods:{
        /* leggi(){
            actions.setSearch('aaaa')
        } */
    }
}
</script>

<style lang="scss">
.prova {
    display: flex;
}
li {
    img {
        width: 10px;
    }
}
</style>