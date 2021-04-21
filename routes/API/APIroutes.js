const Workout = require("../../models/workout");
const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();

router.post("/workouts", (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put("/workouts/:id", (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    Workout.updateOne({ _id: id }, //filter 
            { $push: { exercises: req.body } }, { new: true }) //update
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;