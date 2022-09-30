import axios from "axios";


const domain = "http://localhost:8080/api/bookmarks/"

export const getAllBookmarks = async () => {
  return await axios.get(`${domain}?limit=10&skip=0`);
}

export const findBookmarks = async (description = '') => {
  return await axios.get(`${domain}?description=${description}&limit=10&skip=0`);
}

export const insertBookmark = async (bookmark) => {
  return await axios.post(`${domain}`, bookmark);
}

export const updateBookmark = async (slug, bookmark) => await axios.patch(`${domain}${slug}`, bookmark);

export const deleteBookmark = async (slug) => await axios.delete(`${domain}${slug}`);