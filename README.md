# Setting up the project

First you'll need [Node.js](https://nodejs.org) and the package manager that comes with npm.

Once you've got that working, head to the command line where we'll set up our project.

## Start the project

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install --global yarn
yarn config set registry https://registry.npm.taobao.org
yarn install
yarn start
```

Now open up [http://localhost:8080](http://localhost:8080)

You should see a "Hello World" message in the browser.

## Make some changes

Open up `./pages/Home.js` and change the text to something like "Hello World". The browser automatically reloads with your new code.

## Building a production

```
yarn build:dist
```
