Oneflow
=======

To create the app I used my own react/redux [boilerplate](https://github.com/gustavovnicius/react-redux-boilerplate). I started it from the principle that it should be simple and as much explicit as possible (because there is a lot of complicated boilerplates out there). There is some explanations about the tools and libs that I used on the boilerplate repo.

On the [History](HISTORY.md) there is my assumptions and comments about the solution.

You can check out the application [here](https://gustavo.keybase.pub/). I used the keybase.io file system to serve the application (just copied the files to my directory).

Getting started
---------------

- Git clone this repo

```sh
git clone git@github.com:gustavovnicius/react-redux-boilerplate.git
```

- [Install NVM](https://github.com/creationix/nvm#install-script) and a [pick](https://github.com/creationix/nvm#usage) a node version.

- In this repo root dir, run `npm install` (`npm i` for friends)

Running

```sh
npm start
```
- In a browser of your choice hit [localhost:8080](localhost:8080)

- You are good to go :)

Testing

To run your test suite:
```sh
npm test
# or
npm run test:watch
```

Bundling for production

```sh
npm run build:production
```

It will generate an `index.html` file pointing to the bundled `.js` files inside `dist` dir. It will also generate two `.js` files: One, `app.[hash].js` will be your application, the other one `vendor.[hash].js` will include all your vendors, for caching.
The bundled files will include a hash in their names for the purpose of cache busting.
