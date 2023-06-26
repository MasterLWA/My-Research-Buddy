const User = require('../Model/UserModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

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

//delete a user
const deleteUser = async (req, res) => {
    const {id} = req.params;

    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No user with id: ${id}`);
    }
    
    try{
    await User.findByIdAndRemove(id);
    res.json({message: "User deleted successfully."});
    } catch(error){
        res.status(409).json({ message: error.message });
    }
}


//user Login
const userLogin = async (req, res) => {
    
    const {username, password} = req.body;

        //test username and password come to the frontend
        console.log(username + password);
    
    //check if user is in the database
    try{
        const user = await User.findOne({username});
        
        //test user comes to the frontend
        console.log(user);
    }
    catch(error){
        res.status(404).json({ message: error.message });
    }

    //check password



}


module.exports = {createUser, getUserById, getAllUsers, updateUser, deleteUser, userLogin}



