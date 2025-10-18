import axios from 'axios';

const BASE_URL = 'https://mogapabahi-431fe4166879.herokuapp.com/en';

export const fetchStories = async () => {
  const response = await axios.get(`${BASE_URL}/story/categories`);
  return response.data; // Returns array of stories
};
