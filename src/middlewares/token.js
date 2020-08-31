const jwt = require('jsonwebtoken');


// function checkToken(token) {
//   return jwt.verify(token, "iamthegreatestaliveandiamhumble", function(err, decoded) {
//     if (err || decoded == undefined) return 0
//     return 1;
//   });
// }

function checkToken(req, res, next) {
  const token = req.body.token;
  if (token) {
    jwt.verify(token, "iamthegreatestaliveandiamhumble", function(err, decoded) {
        if (err || decoded == undefined) {
          res
            .status(401)
            .json({errorMessage: "The Token is not Valid"})
        } else {
          next();
        }
      });
  } else {
    res
      .status(401)
      .json({errorMessage: "The Token is not provided"})
  }
}



module.exports = {checkToken}
