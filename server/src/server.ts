const express = require('express');
require('dotenv').config()
const cors = require('cors');

const app = express()
const PORT = process.env.PORT || 8000

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))