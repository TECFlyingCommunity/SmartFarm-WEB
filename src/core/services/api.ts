import axios from "axios"
import environment from "../environments/enviroment"

const api = axios.create({
    baseURL: `${ environment.backend_url }/api/v1`,
    timeout: 5000,
    headers: {

        "Content-Type": "application/json"
    }
})


export default api