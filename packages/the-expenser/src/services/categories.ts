import axios from "axios";

const HOST_URL = "http://localhost:5000/api"

export const fetchCategories = () => axios.get(`${HOST_URL}/categories`, {})
    .then((res: any) => res.data.payload)
    .catch((error: any) => console.log(error))

export const addCategory = ({ name }: any) => axios.post(`${HOST_URL}/category`, { name: name })



