import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`

const get = async (url, param) => {
    const endpoint = `${BASE_URL}${url}${param}`
    return await axios
        .get(endpoint)
        .then(response => response.data)
}
// Other methods to be added
export default {get}