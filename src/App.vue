<template>
  <div id="app">
    <header>
      <search-bar-comp @performSearch="search"/>
    </header>
    <main>
      <grid-comp :items="movies" :loader="loading"/>
      <button @click="getAll">GET ALL OF THEM. ALLLLLLL</button>
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
      loading: false,
    }
  },
  methods: {
    getMovies(queryParams){
      axios.get(this.apiPath+'movie', queryParams).then((res)=>{
        this.movies = res.data.results
        this.loading = false;
      }).catch((error)=>{
        console.log(error);
      })
    },
    search(text){
      const queryParams = {
        params:{
          api_key: this.apiKey,
          query: text, //PLACEHOLDER
        }
      }
      this.loading = true;
      //this.getMovies(queryParams)
      this.getAll(queryParams)
    },
    getSeriesDue(queryParams){
      return axios.get(this.apiPath+'tv', queryParams)
    },
    getMoviesDue(queryParams){
      return axios.get(this.apiPath+'movie', queryParams)
    },
    getAll(queryParams){
      Promise.all([this.getMoviesDue(queryParams), this.getSeriesDue(queryParams)]).then(function (results) {
        console.log(results[0]);
        console.log(results[1]);
      });
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
