// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  // Write your code here
  //const token = req.headers["authorization"];
  const token = req.cookies.jwtToken;
  if (!token) {
    return res.status(401).send({ success: false, msg: {name:"JsonWebTokenError", message:"jwt must be provided"} });
  }

  try {
    //console.log(token);
    const product = jwt.verify(token, "tN3NBpi4uWpGa93C6pWSI35p0bajNcUm");
    //console.log(product);
  } catch (error) {
    return res.status(401).send({ success: false, msg: {name:"JsonWebTokenError", message:"jwt must be provided"} });
  }
  next();
};

export default jwtAuth;
