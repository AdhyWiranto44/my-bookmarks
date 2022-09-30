import axios from "axios";


const domain = "http://localhost:8080/api/categories/"

export const getAllCategories = async () => await axios.get(`${domain}?limit=999&skip=0`);
export const addNewCategory = async (category) => await axios.post(`${domain}`, category);
export const updateCategory = async (slug, category) => await axios.patch(`${domain}${slug}`, category);
export const deleteCategory = async (slug) => await axios.delete(`${domain}${slug}`);