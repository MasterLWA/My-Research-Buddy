const User = require('../Model/UserModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const util = require('util');
require('dotenv').config()

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


// Login
const comparePasswords = util.promisify(bcrypt.compare);

const userLogin = async (req, res) => {
    const { username, passwordHash } = req.body;
  
    // Test username and password come to the frontend
    console.log(username, passwordHash);
  
    try {
      // Check if user is in the database
      const user = await User.findOne({ username });
  
      if (!user) {
        // User not found
        console.log('User not found');
        return res.status(401).json({ message: 'Auth failed' });
      }
  
      // Test user comes to the frontend
      const storedPasswordHash = user.passwordHash;
      console.log(user);
  
      console.log('Password hash:', storedPasswordHash);
  
      // Compare the passwords
      const isPasswordValid = await bcrypt.compare(passwordHash, storedPasswordHash);
  
      if (isPasswordValid) {
        // Password is valid
        console.log('Password is valid');
  
        // Create token
        const token = jwt.sign(
          {
            username: user.username,
            id: user._id,
            role: user.role
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1h'
          }
        );
        console.log('Loging Successful');
        return res.status(200).json({ token });
      } else {
        // Password is invalid
        console.log('Password is invalid');
        return res.status(401).json({ message: 'Auth failed' });
      }
    } catch (error) {
      // Handle any errors that occurred
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  

module.exports = {createUser, getUserById, getAllUsers, updateUser, deleteUser, userLogin}



