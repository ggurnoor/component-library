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


# React Component Library

This is a React component library built with TypeScript, styled-components, and ready for deployment. It includes reusable UI components like `Dropdown`, `Button`, `HeroImage`, and more.

## Table of Contents
- [Installation](#installation)
- [Development](#development)
- [Building the Project](#building-the-project)
- [Testing](#testing)
- [Running the App Locally](#running-the-app-locally)
- [Docker](#docker)
- [Deployment](#deployment)

---

## Installation

1. Clone this repository:

```bash
git clone https://github.com/your-username/component-library.git
cd component-library

2. Install dependencies:

npm install

3. Development

To start the development server:

npm start

Open http://localhost:3000 in the browser.

4. Building the Project

To build the project for production:

npm run build

5. Testing

Run tests with:

npm test

6. Running Storybook

Start Storybook with:

npm run storybook

Open http://localhost:6006 in the browser.

To build Storybook for production:

npm run build-storybook

7. Docker

Build Docker Image

docker build --no-cache -t my-storybook-app .

Run Docker Container

docker run -p 8083:8083 my-storybook-app

Access Storybook at http://localhost:8083.

8. Deployment

To deploy the component library, follow your preferred deployment strategy.

