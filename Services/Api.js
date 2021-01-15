import axios from 'axios'


const create = () => {
    const api = axios.create({
        baseURL: "https://itunes.apple.com",
        timeout: 20000
    })
    const getMusicList = (params) => api.get("/search?term=" + params)

    return {
        getMusicList
    }
}

export default {
    create
}
