const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRoutes"); 

const app = express();
const PORT = 5000; 

// Middleware
app.use(express.json());
app.use(cors());

// Connection
const MONGODB_URI = "mongodb+srv://kaustubh:123kau456stubh@userdata.ki4cwfn.mongodb.net/?retryWrites=true&w=majority&appName=UserData";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connected");
}).catch(err => console.error(err));

// Using Routes 
app.use(userRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
