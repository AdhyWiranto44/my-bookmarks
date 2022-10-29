import axios from "axios";


const domain = "http://localhost:8080/api/favorites/"

export const getAllFavorites = async (limit = 999, skip = 0) => {
  return await axios.get(`${domain}?limit=${limit}&skip=${skip}`);
}

export const findFavorites = async (description = '', limit = 999, skip = 0) => {
  return await axios.get(`${domain}?description=${description}&limit=${limit}&skip=${skip}`);
}

export const insertFavorite = async (favorite) => {
  return await axios.post(`${domain}`, favorite);
}

export const updateFavorite = async (id, favorite) => {
  return await axios.patch(`${domain}${id}`, favorite);
}

export const deleteFavorite = async (id) => {
  return await axios.delete(`${domain}${id}`);
}