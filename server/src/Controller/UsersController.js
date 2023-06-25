const User = require('../Model/UserModel.js');
// const { default: mongoose, Mongoose, model } = require('mongoose');
// const { MongoDriverError, MongoServerClosedError } = require('mongodb');


//get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

//get a user by id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}

//create a user
const createUser = async (req, res) => {
    
    const User = req.body;
    
    const newUser = new User(user);
    
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch(error) {
        res.status(409).json({ message: error.message });
    }

}


module.exports = {createUser, getUserById, getAllUsers}



