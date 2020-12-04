const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const app = express();

//logging
app.use(logger("dev"));

//post rew middlewhare (addes payload to req.body)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "workouts_db";
const collections = ["workouts"];

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });



// db.on("error", error => {
//   console.log("Database Error:", error);
// });

app.get("/", (req, res) => {
  res.send(index.html);
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(_dirname, "public/exercise.html"));
  });

// routes
//GRT api/workouts

// Listen on port 3000
app.listen(3000, () => {
  console.log(` http://localhost:${3000}`,);
});
