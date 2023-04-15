// Express
import { Router, urlencoded } from "express";
// Models
import User from "../models/UserModel.js";

const signupRouter = Router();

// Informs express that the request body will be in urlencoded format (https://expressjs.com/en/api.html#express.urlencoded)
signupRouter.use(urlencoded({ extended: true }));
// signupRouter.use(json()); // make sure to import json instead of urlencoded from the express module


signupRouter.get("/signup", (req, res) => {
  res.render("signup");
});


signupRouter.post("/signup", (req, res) => {



  const userName = req.body.userName;
  const email    = req.body.email;
  const pw       = req.body.pw;
  // const avatar   = "value 1";
  // const bio      = req.body.bio;
  // const tags     = "value 3"
  // const links    = [];
  // links.push(req.body.link1);
  // links.push(req.body.link2);
  // links.push(req.body.link3);




  const user = {

  userName: userName,
  email:    email,
  pw:       pw,
  // avatar:   avatar,
  // bio:      bio,
  // tags:     tags,
  // links:    links,


  };



  // User.create(user)
  // .then((result) => {
  //   console.log("Added values: " + result);
  //   res.statusCode = 200;
  //   // Redirect to settings page with the username as a query parameter
  //   res.redirect(`/settings?userName=${userName}`);
  // })
  // .catch((err) => {
  //   console.error(err);
  //   res.status = 500;
  //   res.render("error", {
  //     code: 500
  //   });
  // });
 
  User.create(user)
    .then((result) => {
      console.log("Added values: " + result);
      res.statusCode = 200;
      
        res.redirect("/success_signup?userName=" + userName);
    })
    .catch((err) => {
      console.error(err);
      res.status = 500;
      res.render("error", {
        code: 500
      });
    });
});

export default signupRouter;
