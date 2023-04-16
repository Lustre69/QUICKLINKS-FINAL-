import { Router } from "express";
// Models
import User from "../models/UserModel.js";

const profile_searchRouter = Router();

/*
  When a client sends an HTTP GET request for `/profile/:idNum`,
  where `idNum` is a parameter,
  retrieve the User with the specified `idNum` from the database
  and display the details inside the `profile` view.
*/


profile_searchRouter.get("/profile/:userName/search", (req, res) => {
  // query where `idNum` is equal to URL parameter `idNum`


  const query = { userName: req.params.userName }


  // fields to be returned
  const projection = "userName email pw avatar bio tags links"



  /*
    calls the function findOne()
    defined in the `database` object in `../models/db.js`
    this function searches the collection `users`
    based on the value set in object `query`
    the third parameter is a string containing fields to be returned
    the fourth parameter is a callback function
    this called when the database returns a value
    saved in variable `result`
  */
  User.findOne(query, projection)
    .then((result) => {
      // If the user does not exist in the database:
      if (result == null) {
        console.log("No such user found: " + query.userName);
        res.statusCode = 400;
        res.render("error", {
          code: 400,
        });
        return;
      }
      // Otherwise:
      const details = { //Get everything to be safe
        userName: result.userName,
        email: result.email,
        pw: result.pw,
        avatar: result.avatar,
        bio: result.bio,
        tags: result.tags,
        links: result.links,


        
      };
      // render the profile view with the retrieved details
      
      res.render("profile_search", details);
    })
    .catch((err) => {
      console.error("An error occured: " + err);
      res.statusCode = 500;
      res.render("error", {
        code: 500,
      });
    });
});



export default profile_searchRouter;