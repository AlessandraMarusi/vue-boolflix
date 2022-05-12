<template>
  <div id="app">
    <header>
      <search-bar-comp @performSearch="search"/>
    </header>
    <main>
      <grid-comp :items="movies" :loader="loading"/>
      <grid-comp :items="tvSeries" :loader="loading"/>
    </main>
  </div>
</template>

<script>
import GridComp from './components/GridComp.vue'
import SearchBarComp from './components/SearchBarComp.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    SearchBarComp,
    GridComp
  },
  data(){
    return{
      apiKey: '6a7bede61b1cae6d9374c42bac50f865',
      apiPath: 'https://api.themoviedb.org/3/search/',
      movies:[],
      itemsList:[],
      tvSeries:[],
      loading: false,
    }
  },
  methods: {
    search(text){
      const queryParams = {
        params:{
          api_key: this.apiKey,
          query: text,
        }
      }
      this.loading = true;
      this.getAll(queryParams)
    },
    getSeries(queryParams){
      return axios.get(this.apiPath+'tv', queryParams)
    },
    getMovies(queryParams){
      return axios.get(this.apiPath+'movie', queryParams)
    },
    getAll(queryParams){
      Promise.all([this.getMovies(queryParams), this.getSeries(queryParams)]).then((res)=> {
        this.movies = res[0].data.results;
        this.tvSeries = res[1].data.results;
      }).catch((error)=>{
        console.log(error);
      })
    },
  }
  /* 
  Array di cose che ci servono ritornato dall'api
  results {
    id
    original_title
    title
    original_language
    vote_average
  }
    */
}
</script>

<style lang="scss">
@import './style/general.scss'; 
</style>
