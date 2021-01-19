const mongoose = require('mongoose');
const config= require('config');
const db= config.get('mongoURI');

const connectDB = async () => {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('mongodb connected');
    }
    catch(err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;