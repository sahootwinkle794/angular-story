import axios from 'axios';

const BASE_URL = 'https://mogapabahi-431fe4166879.herokuapp.com/en';

export const fetchStoriesByType = async (type: string) => {
  const response = await axios.get(`${BASE_URL}/story/by-type?type=${type}`);
  return response.data;
};

export const fetchStoryById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/story/${id}`);
  return response.data;
};
