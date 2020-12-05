const router = require("express").Router();
const Transaction = require("../models/model.js");

router.get("/", (req, res) => {
    res.send(index.html);
  });
  
router.get("/exercise", (req, res) => {
      res.sendFile(path.join(_dirname, "public/exercise.html"));
    });

router.post("/api/workouts", ({ body }, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Transaction.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
