// const mongoose = require('mongoose');

// mongoose.connect("mongodb://localhost:27017/DarshanEase", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log("✅ Database connected"))
// .catch((err) => console.log("❌ DB Connection Failed:", err));
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.log("❌ DB Connection Failed:", err));