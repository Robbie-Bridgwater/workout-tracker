const Workout = require("../../models/workout");
const express = require("express");
const mongojs = require("mongojs");
const router = express.Router();

router.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    const id = mongojs.ObjectId(req.params.id);
    Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: body } }, { new: true })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
        .limit(7)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;