// Express
import { Router } from "express";
// Models
import User from "../models/UserModel.js";
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.post("/search", (req, res) => {
    const searchInput = req.body.searchInput;
    console.log(searchInput);
    res.redirect("/profile/" + searchInput);
});

app.listen(3000, () => console.log("server listening"));


// searchRouter.get("/search", (req, res) => {
//  const input_user = req.body.query;

//   console.log(input_user);

//   User.findOne({ userName: input_user })
//     .then((result) => {
//       if (result == null) {
//         console.log("No such user found: " + query);
//         res.redirect("/");
//         return;
//       }

//       res.redirect('/profile/' + result.userName);
//     })
//     .catch((err) => {
//       console.error("An error occurred: " + err);
//       res.statusCode = 500;
//       res.render("error", {
//         code: 500,
//       });
//     });
// });

export default searchRouter;