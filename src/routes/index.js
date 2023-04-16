import { Router } from "express";
import searchRouter from "./searchRouter.js"; // import the search router

const routes = Router();

/*
  When a client sends an HTTP GET request for `/`,
  render the `index` view.
*/
routes.get("/", (req, res) => {
  res.render("index");
});

/*
  Use routes defined in ./signupRouter.js
*/
routes.use(signupRouter);

/*
  Use routes defined in ./loginRouter.js
*/
routes.use(loginRouter);

/*
  Use routes defined in ./loginRouter.js
*/
routes.use(settingsRouter);

/*
  Use routes defined in ./signup_successRouter.js
*/
routes.use(signup_successRouter);

/*
  Use routes defined in ./login_successRouter.js
*/
routes.use(login_successRouter);

/*
  Use routes defined in ./settings_successRouter.js
*/
routes.use(settings_successRouter);

/*
  Use routes defined in ./profileRouter.js
*/
routes.use(profileRouter);

/*
  Use routes defined in ./searchRouter.js for handling search request
*/
routes.use(searchRouter);

/* 
  If the route is not defined in the server, render `../views/error.hbs`.
  Always define this as the last middleware!
*/
routes.use((req, res) => {
  res.render("error", {
    code: 404,
  });
});

/*
  exports the object `routes` (defined above)
  when another script exports from this file
*/
export default routes;
