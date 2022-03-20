const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://auth:auth123@cluster0.usvpu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};