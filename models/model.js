const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema({
  
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
      {
          type: {type: String, trim: true}
      },
      {
          name: {type: String, trim: true}
      },
      {
          duration:{type: Number}
      },
      {
        wight:{type: Number}
      },
      {
        reps:{type: Number}
      },
      {
        sets:{type: Number}
      },

  ]
});

const Workouts = mongoose.model("Workouts", workoutsSchema);

module.exports = Workouts;
