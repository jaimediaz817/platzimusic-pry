import config from './config'

const apiKey = config.apiKey
const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`

/* obtener los artistas por Pais, por ahora siempre nos devuelve Argentina 
PARA CUANDO SE IMPORTE ESTE MODULO: getArtists
*/
export default function getArtists(country){
    const url = URL.replace(':country', country)
    // modulo que viene en el navegador y utilizar la var URL definida arriba, luego del fetch retorna otra promesa (objetos )
    /* 
    devolver una promesa que retorna un array de artistas
    array con todos los artistas [{},{},{},{}]
    */
    return fetch(url)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}