require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

// Import the User router
const userRouter = require('./Router/UsersRoute.js');


const app = express();


// Load environment variables from .env file
//dotenv.config();


//middleware
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use(userRouter)

// Connect to the database and start the server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // returns a promise
  
  .then(() => { // if the promise is resolved
    console.log('Connected to the database');
    app.listen(process.env.PORT, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })

  .catch((error) => {
    console.log('Error connecting to the database:', error);
  });