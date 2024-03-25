const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors');
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URL = process.env.MONGODB_URL

app.use(cors({
  origin: 'http://localhost:3000',
}));

mongoose.connect(MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

//routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
