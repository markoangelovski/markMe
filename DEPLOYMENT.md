# Frontend

## Hosting

- hosted on Github pages, project: https://github.com/markoangelovski/markMe
- using custom domain defined in **config/production.json** _client_ property
- Github requires CNAME file for subdomain to work. This file is created during build process and the full domain name is defined in **.github/workflows/node.js.yml** file
- Domain that is used for deployment needs to be defined in following files in order to work:
  - **.github/workflows/node.js.yml**
  - **config/production.json**

Current domain details:

- Domain: kovozi.ga
- Registration Date: 23/10/2021
- Expiry date: 23/10/2022

Can be renewed one week before expiration date?

## Build

- pushing to master branch triggers Github Actions from **.github/workflows/node.js.yml** file

# Backend

## Hosting

- hosted on Heroku, project: https://dashboard.heroku.com/apps/markme-api
- Connected to Github repo markoangelovski/markMe: https://github.com/markoangelovski/markMe

## Build

- Automatically deploys when a commit is pushed to master branch
