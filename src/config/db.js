const mongoose = require('mongoose');
// require('../utils/env');

const uri = 'mongodb://localhost/auto-mart';

const dbOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};

 exports.database=()=>{
    mongoose
            .connect(uri, dbOptions)
            .then(() => console.log(":: Connected to database"))
            .catch((error) => console.log(":: Couldn't connect to database ", error));
}

