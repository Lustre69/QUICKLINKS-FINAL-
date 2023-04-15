import { Router } from "express";

const settings_successRouter = Router();

settings_successRouter.get("/success_settings", (req, res) => {
  /*
    when passing values using HTTP GET method
    the values are stored in the req.query object
    Example url: `http://localhost/success?fName=A&lName=B&idNum=123`
    To retrieve the value of parameter `fName`: req.query.fName
  */
  const details = {
    
    userName: req.query.userName,
    email:    req.query.email,
    pw:       req.query.pw,
    bio:      req.query.bio,
    links:    req.query.links,



  };
  // render `../views/success.hbs`
  res.render("success_settings", details);
});

export default settings_successRouter;