const upload = require("../config/multer")
const CustomError = require('../util/CustomError')


async function addPathToBody(req, res, next) {
    if(!req.file || !req.files ) return new CustomError("please select the ads to post", 400,false);
     if (req.files)
          req.body["photoURLs"] = req.files.map(file => file.path)
     
     if (req.file) 
          req.body["photoURL"] = req.file.path

     next();
}

module.exports = (field) => {
     return [upload.single(field), addPathToBody]
}
