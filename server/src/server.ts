import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { LocationDataRoute, TopOffersRoute } from './api/routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

// Mount the router for handling location data fetch
app.use('/api/data', LocationDataRoute);
app.use('/api/data', TopOffersRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));