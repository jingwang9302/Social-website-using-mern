const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

// define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

// initial the port to access, default to 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
