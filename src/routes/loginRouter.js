// Express
import { Router, urlencoded } from "express";
// Models
import User from "../models/UserModel.js"; 

const loginRouter = Router();

// Informs express that the request body will be in urlencoded format (https://expressjs.com/en/api.html#express.urlencoded)
loginRouter.use(urlencoded({ extended: true }));

// Renders view
loginRouter.get("/login", (req, res) => {
    res.render("login");
  });

loginRouter.post("/login", (req, res) =>{
    const input_user = req.body.userName;
    const input_pw   = req.body.pw;

    //function for username and password authentication
    (async () => {
        try {
        const key = await User.findOne({userName:input_user})
        // If the user does not exist in the database:
        if (key == null) {
            console.log("Error: Invalid username");
            res.statusCode = 400;
            res.render("error", {
            code: 401,
            });
            return;
        }
        // If the password does not match with the user in the database:
        else if (key.pw != input_pw) {
            console.log("Error: Invalid password");
            res.statusCode = 400;
            res.render("error", {
            code: 401,
            });
            return;
        }
            // login successful
            res.statusCode = 200;
            res.redirect(
                "/success?userName=" + key.userName
            );  
        } catch(err) {
                console.error("An error occured: " + err);
                res.statusCode = 500;
                res.render("error", {
                code: 500,
                });
            };

    })();
      
});

  export default loginRouter;