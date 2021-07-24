# Cake shop project
## Description

This project is an <b>online confectionery shop</b>. The application has a clear design, easy navigation and block placement. The online store is written in <b>Typescript</b>. The third-party library <b>Styled Components</b> was used for styling, as well as <b>Material UI</b>. The <b>Formik</b> and <b>Yup</b> libraries were used to process the form data. Sending data to the local server is done using the <b>Axios</b> library and <b>Redux Thunk</b>. Library <b>React-router-dom</b> was used for creating navigation links.

## Implemented functionality

+ A catalog of goods of various types, which can be found and selected in the navigation menu. There is a filter in the catalog that allows you to filter products by price and different categories. When you click on a product in the catalog, a modal window opens with a detailed description and the ability to add the product to the cart;
+ A shopping cart and a submission form are implemented on the checkout page. There you can also see all the necessary information about the order. When you click on the "Confirm order" button, data is collected from the form and sent to the local server, the cart is cleared;
+ The application has several forms, where the entered data is first validated and then sent to the server;
+ Responsive design: there is both a desktop and a mobile version of the application;
+ A MongoDB database was used to store the form data submitted by the user.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
