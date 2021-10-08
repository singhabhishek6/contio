const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String, required: false },
    bio: { type: String, required: false },
    about: { type: String, required: false },
    proficiency: [{ type: String, required: false }],
    isOnline: { type: Boolean, required: false, default: false },
    password: { type: String, required: false }
}, {
    versionKey: false,
    timestamps: true
})

const User = mongoose.model('user', userSchema);

module.exports = User;