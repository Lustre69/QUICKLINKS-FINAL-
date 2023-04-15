// Express
import { Router } from "express";
// Models
import User from "../models/UserModel.js";


const searchRouter = Router();

searchRouter.get("/search", (req, res) => {
 const input_user = req.body.query;

  console.log(input_user);

  User.findOne({ userName: input_user })
    .then((result) => {
      if (result == null) {
        console.log("No such user found: " + query);
        res.redirect("/");
        return;
      }

      res.redirect('/profile/' + result.userName);
    })
    .catch((err) => {
      console.error("An error occurred: " + err);
      res.statusCode = 500;
      res.render("error", {
        code: 500,
      });
    });
});

export default searchRouter;