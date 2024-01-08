const mongoose = require("mongoose");

const connectDatabase = () => {
    const dbUri = process.env.DB_URI;
    mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log("Database Connected");
        })
        .catch((error) => {
            console.log("Error Database Not Connected:", error.message);
        });
}

module.exports = connectDatabase