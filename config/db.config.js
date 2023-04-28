if (!/prod/.test(process.env.NODE_ENV)) {
    require("dotenv/config");
    }
    console.log("Database URL: ", process.env.MONGO_URL);
    const mongoose = require("mongoose");
    module.exports = async () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    let db = mongoose.connection;
    db.on("error", err => {
        console.log("MongoDB connection error. Please make sure MongoDB is running");
        process.exit();
    });
    console.log("Database connection established.")
}