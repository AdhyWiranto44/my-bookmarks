import axios from "axios";


const domain = "http://localhost:8080/api/categories/"

export const getAllCategories = async (limit = 999, skip = 0) => {
  return await axios.get(`${domain}?limit=${limit}&skip=${skip}`);
}

export const findCategories = async (name = '', limit = 999, skip = 0) => {
  return await axios.get(`${domain}?name=${name}&limit=${limit}&skip=${skip}`);
}

export const addNewCategory = async (category) => {
  return await axios.post(`${domain}`, category);
}

export const updateCategory = async (slug, category) => {
  return await axios.patch(`${domain}${slug}`, category);
}

export const deleteCategory = async (slug) => {
  return await axios.delete(`${domain}${slug}`);
}