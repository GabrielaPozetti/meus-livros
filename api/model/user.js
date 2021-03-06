const mongoose = require('../database');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        require: true,
        select: false,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const User = mongoose.model ('User', userSchema);

module.exports = User;