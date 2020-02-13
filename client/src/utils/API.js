import axios from "axios";

export default {
  getProductInfo: (path_name) => {
    return axios.get('/api/product/' + path_name);
  },
  getCategoryProducts: (path_name) => {
    return axios.get('/api/category/products/' + path_name);
  },
  getCategoryData: (path_name) => {
    return axios.get('/api/category/' + path_name);
  }
}