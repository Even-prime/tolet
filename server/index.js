require("dotenv").config(); // ✅ Load environment variables
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();


const authRoutes = require("./routes/auth.js");
const listingRoutes =require("./routes/listing.js")


app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth" ,authRoutes)
app.use("/properties", listingRoutes);




/* MONGOOSE SETUP */
const PORT = 5001;
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Dream_Nest",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`✅ Server running on port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
