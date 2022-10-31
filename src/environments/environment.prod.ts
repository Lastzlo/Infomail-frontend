export const environment = {
  production: true,
  API_URL: process.env.NG_APP_API_URL  || 'http://localhost:8028',
  FRONT_URL: process.env.NG_APP_FRONT_URL || 'http://localhost:4200'
};
