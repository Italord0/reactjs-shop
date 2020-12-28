import axios from 'axios'

const api = axios.create({
    baseURL : 'https://market-ws.herokuapp.com'
})

export default api