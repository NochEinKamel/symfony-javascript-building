Symfony + Reusable JavaScript setup
===================================

`Demo Setup`
------------

```
cd bundle
npm install
npm run storybook
```

```
cd app
symfony composer
yarn install?
yarn watch
```

Keys Facts:
-----------

* All Imports inside the bundle must use @AcmeTest
* The alias must be added to the storybook configuration in bundle/.storybook/main.js
* The alias must also be added to the webpackconfig in the app. (See existing setup)

* JS Modules from the bundle can be overwritten by placing the same file name in `assets/bundles/AcmeTestBundle/` in the app (just like twig templates!)
* Those modules can then just reuse the bundle modules by using the same aliases (just like twig templates!)