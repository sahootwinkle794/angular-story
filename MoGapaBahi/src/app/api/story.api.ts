import axios from 'axios';
import { API_CONFIG, Language } from '../config/api.config';
import { LanguageService } from '../services/language.service';

const languageService = new LanguageService();

const getBaseUrl = (language: Language): string => {
  return language === 'en' ? API_CONFIG.BASE_URL_EN : API_CONFIG.BASE_URL_ODIA;
};

export const fetchStories = async (language: Language = 'en') => {
  const baseUrl = getBaseUrl(language);
  const response = await axios.get(`${baseUrl}/story/categories`);
  return response.data;
};

export const fetchStoriesByType = async (type: string, language: Language = 'en') => {
  const baseUrl = getBaseUrl(language);
  const response = await axios.get(`${baseUrl}/story/by-type?type=${type}`);
  return response.data;
};

export const fetchStoryById = async (id: string, language: Language = 'en') => {
  const baseUrl = getBaseUrl(language);
  const response = await axios.get(`${baseUrl}/story/${id}`);
  return response.data;
};