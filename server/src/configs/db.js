const mongoose = require("mongoose");
require("dotenv").config();

// const DB_URL = 'mongodb://localhost:27017/urlshortener';

const connect = () => {
    return mongoose.connect('mongodb+srv://nithin:nithin@cluster0.cvvqvfb.mongodb.net/?retryWrites=true&w=majority');
};

module.exports = connect;
