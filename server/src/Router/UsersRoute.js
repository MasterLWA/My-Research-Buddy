const express = require('express');
const router = express.Router();
const {createUser, getUserById, getAllUsers,updateUser} = require('../Controller/UsersController.js');

//get all users
router.get('/users', getAllUsers);

//get a user by id
router.get('/users/:id', getUserById);

//create a user
router.post('/users', createUser);

//update a user
router.patch('/users/:id', updateUser);

//delete a user

//user login


//export router
module.exports = router;