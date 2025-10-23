export const API_CONFIG = {
  BASE_URL_EN: 'https://mogapabahi-431fe4166879.herokuapp.com/en',
  BASE_URL_ODIA: 'https://mogapabahi-431fe4166879.herokuapp.com',
  DEFAULT_LANGUAGE: 'en',
  // Keep the old BASE_URL for backward compatibility
  BASE_URL: 'https://mogapabahi-431fe4166879.herokuapp.com/en'
} as const;

export type Language = 'en' | 'odia';