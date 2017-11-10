<template>
  <li class="artist">
        <h2>
            <a :href="artist.url" target="_blank">{{artist.name}}</a>
        </h2>
            <!-- 
                #text: url
                image:  [{"#text":"https://image1.png"},
                          {"#text":"https://image1.png"},
                          {"#text":"https://image1.png"},
                          {"#text":"https://image1.png"},
                          {"#text":"https://image1.png"},
                          {"#text":"https://image1.png"}
                        ]
            -->                        
            <img :src="artist.image[2]['#text']" alt="image Test">       
  </li>
</template>

<script>
    // cual será el nombre del componente?
    export default{
        artist: 'artist',
        props: ['artist']
    }
</script>

<!-- Utilizando ids a los elementos "atributos de datos a los elementos en cuestion para pomer el mismo, si y solo si a los que tengan el data"-->
<style scoped>
    /* Reducir el alcance de otros componentes para no pisar cambios*/

    ul li.artist{
        display: block;
        margin: 10px 0;
    }
    ul li a{
        display: block;
    }
</style>

