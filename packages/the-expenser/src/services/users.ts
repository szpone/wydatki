import axios from "axios";

const HOST_URL = "http://localhost:5000/api"

export const fetchUsers = () => axios.get(`${HOST_URL}/users`)
    .then((res: any) => res.data.payload)
    .catch((error: any) => console.log(error))
