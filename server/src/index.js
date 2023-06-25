import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
// const port = 4000;

// Load environment variables from .env file
dotenv.config();


//middleware
app.use(express.json()); 

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

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