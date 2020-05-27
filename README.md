# Frontend Challenge

We would like you to make your own small telecom branch, where people can browse and perhaps purchase phones and accessories. Everthing you need to get started right away is included in this repository.

The main purpose of this challenge is for you to show us your frontend skills which include your knowledge of React and how you are constructing and organizing components and assets.

We prefer you to solve the challenge using TypeScript, however, plain JavaScript will do just fine.

If you do not consider yourself particularly good at visual expressions, don't worry. This challenge is primarily to see how well you master React.
Likewise, we do not expect you to be all knowledgeable about either Node or NPM, if you do, that's great, but it's not a requirement. We do, however, expect you to have extensive first-hand knowlagde of ES6, HTML5 and CSS3.

## Sample files

Just to get you started, we have included some sample files which show how to connect to the data API, using CSS modules and how to display static assets.

All sample files are formatted using [Prettier](https://prettier.io/). We are recommending you to
continue to do so, but it's not mandatory.

NB. If you're using VS Code as your IDE, configuration files such as eslintrc and webpack are hidden by default. Likewise, Prettier auto format on save is enabled. You can disable it all in `/.vscode/settings.json` if you like.

## Install and run

This package will install all the necessary modules, include component Hot-Loader and various linting and formating tools, to immediately let you begin coding.

    npm install
    npm start

The development server (include the API) is running at [http://localhost:3000]()

To lint all your scripts and style components:

    npm run lint

To build and run your app:

    npm run build
    npm run app

The production server is likewise running at [http://localhost:3000]()

You are welcome to add or modify packages.

## Data API

Product data is located in the `/data` directory as a collection if JSON files and is accessible through an API. All requests have a built-in delay randomizer to simulate a live environment.

- `/api/device/list` returns a complete list of products.
- `/api/device/{PRODUCT_ID}` returns an individual product.

## Static files

All files in the `/static` directory will become available at runtime. The files will follow the current tree structure in the directory and be accessible like so:

- `/static/devices/Apple_iPhone7_Slv-1.png`

## Requirements

- You must use React.
- Display the product list as a whole or partial.
- Display individual product information.
- The content must be responsive.
- Must build without errors.

The final result has to be available in a public Git repository which include the commit history. You are also permitted to use a private repository, just make sure we have read access.

## Optional tasks

- Show product variants.
- Sort product list by brands and/or vendor.
- Implement [React Router](https://reacttraining.com/react-router/web/guides/quick-start) for better navigation.
- Implement a simple shopping basket.
- Create unit tests.

## Restrictions

There are no restrictions as such. However, we do prefer you to show us your own idea and work; not just reusing or refactoring other libraries or frameworks.
