const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT } = process.env;

// DB_HOST_VRO = "mongodb+srv://test:testuser@vro.s3tjvju.mongodb.net/db_contacts?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
