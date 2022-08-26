const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const userSchema = new Schema (
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [
                /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                "Please use a valid email address",
            ],
        },

        thoughts: [ 
            {
                type: Schema.Types.ObjectId,
                ref: "Thought",
            }
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: user,
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;