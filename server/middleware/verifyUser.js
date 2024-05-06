import jwt from "jsonwebtoken";

const verifyUser = (req, res, next) => {
  // Retrieve token from cookies in request object
  const token = req.cookies.vvyyzz;

  //check if the token is not correct at which you should return
  if (!token) {
    return res.status(403).json({
      success: false,
      message: "You're not authenticated for this action. Please Sign In",
    });
  }

  // Assuming there is a token in the cookies
  // You now have to use the verify method from jwt to get the
  // The userid here is the item that was saved when you signed
  // the jwt token during signin

  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res
        .status(403)
        .json({ success: false, message: "Invalid token!" });
    }

    // If token is valid, then you can append the returned userId again to the res object
    // before sending off to the next controller

    req.userIdToken = payload;
    next();
  });
};

export default verifyUser;
