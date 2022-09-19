import axios from "axios";


const domain = "http://localhost:8080/api/categories/"

export const getAllCategories = async () => await axios.get(`${domain}?limit=10&skip=0`);