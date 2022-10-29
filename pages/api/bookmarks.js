import axios from "axios";


const domain = "http://localhost:8080/api/bookmarks/"

export const getAllBookmarks = async (limit = 999, skip = 0) => {
  return await axios.get(`${domain}?limit=${limit}&skip=${skip}`);
}

export const findBookmarks = async (description = '', limit = 999, skip = 0) => {
  return await axios.get(`${domain}?description=${description}&limit=${limit}&skip=${skip}`);
}

export const findBookmarksByCategory = async (category = '', limit = 999, skip = 0) => {
  return await axios.get(`${domain}?category=${category}&limit=${limit}&skip=${skip}`);
}

export const insertBookmark = async (bookmark) => {
  return await axios.post(`${domain}`, bookmark);
}

export const updateBookmark = async (slug, bookmark) => {
  return await axios.patch(`${domain}${slug}`, bookmark);
}

export const deleteBookmark = async (slug) => {
  return await axios.delete(`${domain}${slug}`);
}