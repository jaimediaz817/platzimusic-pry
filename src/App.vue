<template>  
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Platzimusic Local</h1>
    <!-- Listado de Paises
    v-model:  hacer bind a un atributo de la vista, selectedCountry
    -->
    <select name="" id="" v-model="selectedCountry">
      <option 
        v-for="country in countries" 
        v-bind:value="country.value">
        {{country.name}}
      </option>
    </select>
    <!-- Otro componente creado -->
    <spinner
      v-show="loading"
    >
    </spinner>
    <ul>
      <artist v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid"></artist>
    </ul>
  </div>
</template>

<script>
  // importaciones
  import Artist from './components/Artist.vue'
  import Spinner from './components/Spinner.vue'
  import getArtists from './api'  

  export default {
    name: 'app',
    data () {
      return {
        artists: [],
        countries: [
          {name:'Argentina', value:'argentina'},
          {name:'Colombia', value:'colombia'},
          {name:'España', value:'spain'}
        ],
        selectedCountry: 'colombia',
        loading:true
        /* 
        borrando artistas hardcodeados:
          {name: 'artsits1'},
          {name: 'artsits2'},
          {name: 'artsits3'},
          {name: 'artsits4'},
          {name: 'artsits5'}      
        */
      }
    },
    components:{
      Artist,Spinner
    },
    methods: {
      refreshArtists(){
        // => hace referencia al objeto global
        const self = this
        this.loading = true
        this.artists = []
        getArtists(this.selectedCountry)
          .then(function(artists) {
            //
            self.artists = artists
            self.loading = false
          })      
      }
    },
    mounted(){
      // => hace referencia al objeto global
      /*const self = this
      getArtists()
        .then(function(artists) {
          //
          self.artists = artists
        })
      */
      this.refreshArtists()
    },
    watch:{
      // cuando suceden cambios
      selectedCountry(){
        this.refreshArtists()
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
