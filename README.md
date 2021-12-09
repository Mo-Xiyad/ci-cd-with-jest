### Tests that are preformed by tester

- Write these tests and their implementation:
- When retrieving the /products/:id endpoint:
- expect requests to be 404 with a non-existing id
- expect requests to return the correct product with a valid id
- When deleting the /products/:id endpoint:
- expect successful 204 response code
- expect 404 with a non-existing id
- When updating a /product/:id endpoint with new data:
- expect requests to be accepted.
- expect 404 with a non-existing id
- Expect the response.body.name to be changed
- Expect the typeof name in response.body to be “string”
- When tests are in place, create a Continuous Delivery pipeline on Heroku for this project
- deploy the current master in production
- Activate automatic builds for the development app from the develop branch
- Don’t forget to add all TEST, REVIEW, STAGING and PRODUCTION environment vars.

NOTE:
Remember to keep three separate apps:

Review automatically deployed from develop branch.
Staging automatically deployed from master branch.
Production deployed when promoted from staging.

## To convert the project to Typescript

- Install TS as a dev dependency
  npm install typescript -D

- Initialize your tsconfig

tsc --init

- Define your rootDir (generally "./src") and outDir (generally "./dist" or "./build")

- Installing the testing framework

npm install jest ts-jest @types/jest supertest

- Configuring for TS

npx ts-jest config:init

> ---

- On vsCode press "CMD p" and >restart ts server
- npm i @types/express
