import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();
const app = express()
const PORT = process.env.PORT || 8000

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

// Then pass these options to cors:
app.use(cors(options));
app.use(express.json())

app.get('/test', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))