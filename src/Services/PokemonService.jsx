import axios from "axios";
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon'
//https://pokeapi.co/api/v2/pokemon?offset=20&limit=20
const all = (limit=20) => {
    return axios.get('?limit='+limit)
}
const show = (id) => {
    return axios.get(id)
}
export { all, show }