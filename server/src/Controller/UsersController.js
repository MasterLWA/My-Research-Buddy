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
    
    const {username,Name,passwordHash,email,role} = req.body;
    
    try{
        const newUser = await User.create({username,Name,passwordHash,email,role});
        res.status(201).json(newUser);
    }
    catch(error){
        res.status(409).json({ message: error.message });
    }
}

//update a user
const updateUser = async (req, res) => {
    
    const {username,Name,passwordHash,email,role} = req.body;
    
    const {id} = req.params;

    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No user with id: ${id}`);
    }   

    const updatedUser = await User.findByIdAndUpdate(
        {_id: id},
        {
            ...req.body,
        }
    )

    res.json(updatedUser);
}



module.exports = {createUser, getUserById, getAllUsers, updateUser}



