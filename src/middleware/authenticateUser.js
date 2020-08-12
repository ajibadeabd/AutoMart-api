const {Role}= require('../../src/middleware/userRole')
const response= require('../util/response')

exports.authorize = (role_ids = []) => {
    return [
      // authorize based on user role
      (req, res, next) => {
        if (role_ids.length && !role_ids.includes(req.user.role)) {
          return res.status(401).json({
            message: `unauthorized user`,
            data:null
          });
        }
        // authentication and authorization successful
        next();

      },
    ];
  };