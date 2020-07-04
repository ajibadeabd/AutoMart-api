const {Role}= require('../../src/middleware/userRole')

exports.authorize = (role_ids = []) => {
    if (typeof role_ids === 'string') {
      // eslint-disable-next-line no-param-reassign

    }
  
    return [
      // authenticate JWT token and attach user to request object (req.user)
    //   jwtExpress({ secret }),
  
      // authorize based on user role
      (req, res, next) => {
        if (role_ids.length && !role_ids.includes(req.user.role)) {
          // user's role is not authorized
          return res.status(401).json({
              
            message: `User Role: ${req.user.role} does not have permission to perform this action or access this route`,
          });
        }
  
        // authentication and authorization successful
        next();

      },
    ];
  };