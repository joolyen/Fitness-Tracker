const db = require("../models");
const router = require("express").Router()

//get route for previous workout
router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// post route to add a new workout
router.post("/api/workouts", (req, res) => {
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//put route to update workout
router.put("/api/workouts/:id", (req, res) => {
    console.log(req.body); 
    console.log(req.params.id);
    db.Workout.findByIdAndUpdate(
        req.params.id,
        {
            $push: {
                exercises: req.body
            }
        },
        (error, dbWorkout) => {
            if (error) {
                res.send(error);
            } else {
                res.send(dbWorkout);
            }
        }
    );
});

// this will "get" a range of workouts 
router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

//exporting routes
module.exports = router;

