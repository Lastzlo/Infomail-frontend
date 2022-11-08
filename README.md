# Infomail Frontend
![InfoMail-logo](https://imgur.com/EyQPoMx.png)

Front-end part of the Infomail project.

### Project links
* [infomail](https://infomail-frontend.herokuapp.com/) - InfoMail site
* [infomail-backend](https://github.com/Lastzlo/InfoMail) - Backend part of the project
* [presentation](https://docs.google.com/presentation/d/1b3__UhovdmZHmPkEundb0FxifjXbJPbz/edit?usp=sharing&ouid=100645824107772636818&rtpof=true&sd=true) - project presentation

## How to launch
### In development mode
1) run backend part [infomail-backend](https://github.com/Lastzlo/InfoMail)
2) set environment variables in [environment.ts](https://github.com/Lastzlo/Infomail-frontend/blob/master/src/environments/environment.ts)
3) run `npm run development`
### In product mode
1) run backend part [infomail-backend](https://github.com/Lastzlo/InfoMail)
2) run command below to build the project. The build artifacts will be stored in the `dist/` directory
```cmd
set "NG_APP_API_URL=http://localhost:8028"
set "NG_APP_FRONT_URL=http://localhost:4200"
set "NG_APP_SHOW_LOGS=false"
npm run build
```
3) run `npm run start` to run the project.

