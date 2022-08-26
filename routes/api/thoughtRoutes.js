const router = require("express").Router();

const { 
    getThoughts,
    getOneThought,
    createThought,
    deleteThought,
    updateThought,
    createReaction,
    deleteReaction
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought);