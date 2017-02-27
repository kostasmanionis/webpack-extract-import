# SETUP

Two entry files. Each one imports a module that loads another module on demand. BUT one of the entry files also imports
a third module, that imports some of the on demand module styles.

`npm install` or `yarn install`

`npm start` or `yarn start`


# ISSUE

Even though `0.js` is a child chunk of `home.js` and `user.js`, the `0.js` chunk styles are only present in `user.css`