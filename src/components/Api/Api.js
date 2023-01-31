import axios from 'axios';

axios.defaults.baseURL = "https://pixabay.com/api";
const API_KEY = '31704794-60eeb3a6ac83e8d6bcf335c57';

const getImages = async(searchImg) => {
    const response = await axios.get(`/?q={searchImg}&page=1&key={API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data
}

export default getImages;
// export const getImages = async (searchImg) {
//     return await axios.get(
      
//     );
//   };