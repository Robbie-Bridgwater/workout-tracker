const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    exercises: [{

        type: {
            type: String,
            required: "Exercise type is required"
        },

        name: {
            type: String,
            required: "Exercise name is required"
        },

        duration: {
            type: Number,
            required: "Duration is required"
        },

        weight: {
            type: Number,
        },

        reps: {
            type: Number,
        },


        sets: {
            type: Number,
        },

        distance: {
            type: Number,
        }
    }],
    // include any virtual properties
}, { toJSON: { virtuals: true } });

// add a virtual property to schema
workoutSchema.virtual("totalDuration").get(function() {
    // *reduce* the array of exercises in the schema to the sum of their durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration
    }, 0);
})


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;