This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the project

A user can input thier name, email, rating and comment. Right away the feedbacks list will be updated, along with the daily trends of the feedbacks which shows how many feedbacks are given every single day.

## Techs and Tools

This project is built over `Vanilla Javascript (with ES6+)` features, `React JS` for front end rendering along with `Redux` for state management, `SCSS` pre-processor has been used for styling and `CSS modules` feature is used, which dynamically assigns classnames to the `JSX (HTML)` elements. `Node JS` has been used on the backend, with `MySQL` database and `Sequelize ORM`. Few more third party libraries are used for a good hand on, which are `Sweetalert` for showing nice popups with messages, `React-Star-Rating` library which gives good rating flexibility. 

## Configuration

Clone the repo through `git clone repo-link`.</br>

Run the command within the repo `npm install` which will install all the required dependencies.</br>

Run your local server `wamp / xampp` or any, and create a database with name `checkout`.</br>

As, I am not using `sequelize-cli` I have created my own commands to migrate the models and then run the backend server. Type `npm run migrate-models` when it finishes, it will create two tables with the defined associations in it. After this run `npm run server` it will created the connection with database and will up the server for you, running on port `3001` (feel free to change it).</br>

Now it's time to run the front end by running the command `npm start`.</br>

After everything is up and running, now you can signup and give your feedback, which will be displayed right after you submit the form. </br>

Note: Once a user signup with a specific email (taken as unique key), then typing the feedback will only write to the `feedbacks` table and no changes will be made on the `users` table.</br>

## Unit Tests

For testing the functions as well as the components of the application. I have used `JEST`, and `react-testing-library`. Also, the `redux-store` caused an issue while testing the components, for that I have installed a third party library called `redux-mock-store` which mocks the store and pass it to the `<Provider/>` higher order component `HOC`, and that solves the problem.

To run the test, just simply run the command `npm run test`. 


## Building the application

For building the application and making it ready to  deploy, just run `npm run build`
