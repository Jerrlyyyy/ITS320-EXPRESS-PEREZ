//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username']
    },
    email: {
        type: String,
        required: [true, 'Please provide a username']
    },
    password: {
        type: String,
        required: [true, 'Please provide a username']
    }
});

//export default userSchema;
const User = mongoose.model('User', userSchema);

export default User;