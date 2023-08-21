const mongoose = require("mongoose");

const url = "mongodb+srv://preyash:thakkar@cluster0.xebyv1r.mongodb.net/your-database-name";

module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));
};
