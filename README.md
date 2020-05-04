## Bundle size client

Welcome to the "Bundle size client", this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Before execute the project you need to install all the libraries associated, to do that you need to execute the following command:

```
yarn or npm run install
```


## Requirements to visualize the portal

Browser: Chrome (latest version) / Firefox (lastest version) or Edge. Not compatible with mobile devices yet, but you can have friendly visualization on tablets.


## Technologies used to developed the Bundle size - client

Browser: Chrome (latest version)
OS: MacOS Mojave
IDE: Visual Studio Code
Language: JavaScript/React


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Project structure
```
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.tsx
│   ├── actions
│   │   └── status.tsx
│   ├── api
│   │   ├── bundle-server.tsx
│   │   ├── index.tsx
│   │   └── npmjs.tsx
│   ├── assets
│   │   ├── fonts
│   │   │   ├── NotoSansJP-Bold.otf
│   │   │   ├── NotoSansJP-Light.otf
│   │   │   ├── NotoSansJP-Regular.otf
│   │   │   └── NotoSansJP-Thin.otf
│   │   └── images
│   │       ├── notfound.gif
│   │       ├── processing.png
│   │       ├── search.gif
│   │       └── search.svg
│   ├── components
│   │   ├── Loading
│   │   │   ├── Loading.tsx
│   │   │   ├── index.tsx
│   │   │   └── styles
│   │   │       └── Loading.module.scss
│   │   └── Search
│   │       ├── Search.tsx
│   │       ├── hooks
│   │       │   └── index.js
│   │       ├── index.tsx
│   │       └── styles
│   │           └── Search.module.scss
│   ├── index.tsx
│   ├── pages
│   │   └── Home
│   │       ├── HomeContainer.tsx
│   │       ├── components
│   │       │   ├── Home.tsx
│   │       │   ├── Library.tsx
│   │       │   └── Statics.tsx
│   │       ├── hooks
│   │       │   ├── useHome.tsx
│   │       │   └── useLibrary.tsx
│   │       ├── index.tsx
│   │       └── styles
│   │           ├── Home.module.scss
│   │           └── Library.module.scss
│   ├── react-app-env.d.ts
│   ├── reducers
│   │   └── status.tsx
│   ├── setupTests.ts
│   ├── store.ts
│   ├── styles
│   │   ├── core
│   │   │   └── vars.scss
│   │   ├── fonts.scss
│   │   └── global.scss
│   └── types.ts
├── tsconfig.json
└── yarn.lock
```


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
