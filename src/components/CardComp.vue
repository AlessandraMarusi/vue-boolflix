<template>
    <div class="myCard col-sm-5 col-md-4 col-lg-2 g-4">
        <img v-if="item.poster_path !== null" :src="imgBaseUrl+item.poster_path" alt="Poster del film">
        <img v-else src="../assets/images/cat404.jpg" alt="">
        <div class="infos">
            <div class="title">
                <span>Titolo: </span>
                <span>{{title}}</span>
            </div>
            <div class="originalTitle">
                <span>Titolo originale: </span>
                <span>{{originalTitle}}</span>
                <country-flag :country='languages' size='small'/>
            </div>
            <div class="votes">
                <span v-for="index in 5" :key="index"><font-awesome-icon :icon="index <= starVote ? 'fa-solid fa-star' : 'fa-regular fa-star'"/></span> 
<!--                 <font-awesome-icon icon="fa-solid fa-star" />
                <font-awesome-icon icon="fa-regular fa-star" /> -->
            </div>
            <div class="overview">
                <span>Overview:</span>
                <span>{{item.overview}}</span>
            </div>
            
        </div>
        <!-- <ul>
            <li>
                id: {{item.id}} <br/>
                titolo originale: {{item.original_title ? item.original_title : item.original_name}} <br/>
                titolo: {{item.title ? item.title : item.name}} <br/>
                lingua:  <br/>
                voto: {{item.vote_average}} <br/>
                <img :src="imgBaseUrl+item.poster_path " alt="Poster del film">
            </li>
        </ul> -->
    </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
    name: "CardComp",
    components: {
        CountryFlag,
    },
    props:['item'],
    data(){
        return {
            imgBaseUrl: 'https://image.tmdb.org/t/p/w342'
        }
        
    },
    computed:{
        //ORA NON FUNZIONA MA FUNZIONERà DOPO
        languages(){
            if(this.item.original_language === 'en'){
                return 'gb'
            }else if(this.item.original_language === 'ja'){
                return 'jp'
            }else{
                return this.item.original_language
            }
        },
        originalTitle(){
            return this.item.original_title ? this.item.original_title : this.item.original_name
        },
        title(){
            return this.item.title ? this.item.title : this.item.name
        },
        starVote(){
            console.log(this.item.vote_average)
            return Math.round(this.item.vote_average/2)
        },
    }
}

</script>

<style lang="scss">
@import '../style/general.scss'; 
.black {
    color: black;
}
.myCard {
    background-color: $bgColor;
    height: 300px;
    overflow-y: hidden;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;

    }
    .infos{
        width: 100%;
        height: 100%;
        visibility: hidden;
        position: absolute;
        color: white;
        top: 0%;
        left: 0%;
        z-index: 2;
        background: $bgColor;
        .overview span{
            overflow-y: hidden;
        }
    }
}
.myCard:hover .infos{
    visibility: visible;
}
</style>