# Green Shopper - eCommerce Project [MERN + TailwindCSS + Firebase File Storage]


### This project is one of many I've lined up to practice and upskill myself as a job-ready MERN Stack Developer. I've been explosed to many aspects of creating a Full Stack Application, from setting up the servers, planning routes, building models for a data base using mongodb (mongoose).

### I also got to use and learn about different packages with the front and back end too

## Front End - React

- react-toastify: tool for creating animated notifications for front end applications
- redux and redux@toolkit: For creating more efficient global state management for react applications
- react-redux: used in conjunction with redux, it allows us to seamlessly persist state in our application even when the user exits the app or refreshes the browser. A cool way of storing non-sensitive user data on the front end (it uses local storage for this).
- firebase: Provided by google, I used the firebase storage SDK to allow for easy upload of files. This was to ensure the server is not crowded with sending response for images as the project has numerous picture requests to make to get each product image.
- react-intersection-observer - Kind of a wrapper over the built-in browser Intersection Observer API, this package makes it easier to configure and use on the go.
- react-lazy-load-image-component: an extension of adding the lazy attribute to an image tag, this package allows you to add more options to customize the state of the image pending load time, from things like adding blur and other effects.
- react-router-dom: By all means, how else do you want to implement routing right?

## Back End - Node/ExpressJS

- cookie-parser: Used this as a middleware for our express app to allow us be able to parse cookies from the user req/res cycle.
- bycryptjs: Used this backage to encrypt user password before saving to the database. When the user tries to log in, the password provided is compared with the hashed password using the bcrypt.compareSync().
- dotenv: Used to configure environment variables, so the Node runtime can have access to the environment variables in the system where the server is being run.
- jsonwebtoken (jwt): This package made it really easy to create authentication data for users. A token is created and saved to the browser cookie, for any route that requires authentication, the token is tretrieved and then verified if it is correct before user is granted permission to requested resource.
- mongoose: A NodeJS driver for MongoDB
- nodemon: This is used to run the server and monitor for changes.

## Other tools

- Learnt how to use POSTMAN to test my API routes during development
- Learnt how to use figma files (thanks to Template Cookie on figma who designed the UI for the app. I was able to adapt the design to make it responsive across all screen sizes)
- Now I've learnt how to deploy on render.com
