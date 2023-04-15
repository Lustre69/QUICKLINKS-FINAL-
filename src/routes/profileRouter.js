// Express
import { Router } from "express";
// Models
import User from "../models/UserModel.js";

const profileRouter = Router();

/*
  When a client sends an HTTP GET request for `/profile/:userName`,
  where `userName` is a parameter,
  retrieve the User with the specified `userName` from the database
  and display the details inside the `profile` view.
*/

profileRouter.get("/profile/:userName", async (req, res) => {
  try {
    // query where `userName` is equal to URL parameter `userName`
    const query = { userName: req.params.userName };

    // fields to be returned
    const projection = "userName email pw avatar bio tags links";

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
    const user = await User.findOne(query, projection);

    // If the user does not exist in the database:
    if (!user) {
      console.log("No such user found: " + query.userName);
      res.statusCode = 400;
      return res.render("error", {
        code: 400,
      });
    }

    // Otherwise:
    const details = { 
      userName: user.userName,
      email: user.email,
      pw: user.pw,
      avatar: user.avatar,
      bio: user.bio,
      tags: user.tags,
      links: user.links,
    };

    // render the profile view with the retrieved details
    return res.render("profile", details);
  } catch (err) {
    console.error("An error occured: " + err);
    res.statusCode = 500;
    return res.render("error", {
      code: 500,
    });
  }
});

export default profileRouter;
