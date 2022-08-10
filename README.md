# Node-Mock Backend API Development for Projects

This is Node Mock backend, developed using following Tech stack,`NodeJS`, `ExpressJS`, and following are middlewares and libraries used for

> `Handlebar` used as view engine [Refer Documentation](https://handlebarsjs.com)

> `Express-Validator` used for validated request payload params [Refer Documentation](https://express-validator.github.io/docs/)

> `CORS` used for resolve Cross Origin Issue [Refer Documentation](https://www.npmjs.com/package/cors)

> `Node Json DB` used for mock database [Refer Documentation](https://www.npmjs.com/package/node-json-db)

> `Bootstrap` used for UI styling [Refer Documentation](https://getbootstrap.com/)

![Node-Mock Backend Tech stack](https://i.ibb.co/pXD5n50/Node-mock-backend-tech-stack.png)

# How to run this Node-Mock Backend

Follow below steps and run your server in your local development environment

- Install `NodeJS` if you are not installed
- Pull this codebase from the GitHub
- Do `npm install`, it's take while to install dependencies
- Run using `npm start` command or if you want `watch` mode then use follow command `npm run watch`
- open your browser and enter your localhost - default set `http://localhost:8000`, if you want to run on different `PORT` updated your `package.json`

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "watch": "SET PORT=8000 && nodemon server.js"
  },
```

once you up the server using given `commands` then you can see the PORT your `server` running on, refer below screenshot

![Server running PORT](https://i.ibb.co/YTK3YjJ/node-running-port-localhost.png)

# Sceenshot of Node-Mock Backend

Once your server is up, this is the view you will get

![Node-mock backend server up](https://i.ibb.co/HqBwx30/Node-mock-backend-server-up.png)

## Whay You need this ?

If you are a Frontend developer normally integration is one of the task you need perform in your day to day programming life.

> `Example: integrate UI with backend using API's which is provided by Backend Team`.

now imagine `Backend API endpoint` is not ready yet. in this case how you perform this tasks ? correct you are mock the JSON. and keep given response JSON in your frontend root and calling them each time.

but now think API is expecting `POST` and not `GET` request ? `POST`, and also API expecting to pass key Value pair along with Payload. now what you can do ? so no option to do that right ? once again you will going with `GET`. because there is no option to send `POST` request and pull the data.

But this `Node-Mock Backend` will help you to perform that task. this is very simple node backend developed with MVC architecture. if you like to make it advance you are always welcome.

this will remove your backend dependency. so once backend team provide `API` endpoint, then you can simply replace `Node backend endpoint` with your `actual API endpoint`.

## How to resolve CORS(cross origin request blocked)

it's very simple now. we are using `CORS` library for handle this Cross origin issue, so in your `app.js`, you can see the middleware which we are using. what you need to do is simply replace this URL `origin: "http://localhost:4200` with your frontend URL `origin: "your frontend running URL`.

> if you want to know more details abour `CORS` [Refer Documentation](https://www.npmjs.com/package/cors)

```
// CORS origin whitelisting: add your local dev frontend url with port: Angular default http://localhost:4200
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
```

## Node-Mock backend Project Structure

Here is Node-Mock backend Project Structure.

> `model` directory includes codes related to mock database `inserting`, `delete`, `reading`

> `view` directory includes templates

> `controller` this is responsible for handle `req` and `res` and `render` dynamic data in to `view`

```
Dev-Mock-Backend/
    ├── controller/
    │       ├── users.controller.js
    ├── models/
    |       ├─ users,model.js
    ├── public/
    |       ├─ db/
    |           ├─ nodeMockDB.json
    |       ├─ images
    |           ├─ rocket.gif
    ├── routes/
    |       ├─ users.router.js
    ├── views/
    |       ├─ welcome.hbs
    ├── app.js
    ├── server.js
    ├── package.json
```

## Who Am I ?

I'm Raheem, Software Engineer, Tech Enthusiast and Youtuber. do you want to know more details about me ? [Here is my website](https://inproto.net/raheem)

Follow me using below links

<div id="badges">
  <a href="https://www.linkedin.com/in/raheem-mohamed-293ab1113">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://www.youtube.com/channel/UCGntGI59Kz_WNCpaeOks0uw">
    <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
  </a>
</div>
