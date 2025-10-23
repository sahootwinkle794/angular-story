import axios from 'axios';
import { API_CONFIG } from '../config/api.config';


export const fetchStories = async () => {
  const response = await axios.get(`${API_CONFIG.BASE_URL}/story/categories`);
  return response.data; // Returns array of stories
};
