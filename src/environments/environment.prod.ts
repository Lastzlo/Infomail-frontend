export const environment = {
  ENABLE_PRODUCTION_MODE: true,                                       // turn on Angular production mode
  API_URL: process.env.NG_APP_API_URL  || 'http://localhost:8028',    // url to the running Infomail server
  FRONT_URL: process.env.NG_APP_FRONT_URL || 'http://localhost:4200', // url to the current
  SHOW_LOGS: process.env.NG_APP_SHOW_LOGS || false,                   // show logs in console
};
