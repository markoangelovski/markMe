# Frontend

## Hosting

- hosted on Github pages, project: https://github.com/markoangelovski/markMe
- using custom domain defined in **config/production.json** _client_ property
- Github requires CNAME file for subdomain to work. This file is created during build process and the full domain name is defined in **.github/workflows/node.js.yml** file
- Domain that is used for deployment needs to be defined in following files in order to work:
  - **.github/workflows/node.js.yml**
  - **config/production.json**

Current domain details:

- Domain: angelovski.ga
- Registration Date: 22/01/2022
- Expiry date: 22/01/2023

Current temporary domain details:

- Domain: mordax.ga
- Registration Date: 12/3/2022
- Expiry date: 12/3/2023

Can be renewed one week before expiration date?

Edit 13 March 2023:
**Both domains expired, no new domains can be created.**

## Build

- pushing the master branch to Github remote triggers Github Actions from **.github/workflows/node.js.yml** file

# Backend

## Hosting

- Hosted on Railway.app, project: https://markme.up.railway.app

- - **Deprecated - Mogenius**: Hosted on Mogenius, project: https://markme-prod-projects-fazagc.mo1.mogenius.io
- **Deprecated - Azure**: Connected to Azure DevOps repo: https://dev.azure.com/angelovskimarko/Mark-Me
- **Deprecated - Heroku**: Hosted on Heroku, project: https://dashboard.heroku.com/apps/markme-api
- **Deprecated - Heroku**: Connected to Github repo markoangelovski/markMe: https://github.com/markoangelovski/markMe

## Build

- Automatically deploys when a commit on master branch is pushed to Azure DevOps remote
- **Deprecated - Heroku**: Automatically deploys when a commit on master branch is pushed to Github remote
