import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from "helmet";
import logger from './log/logger';
import { LocationDataRoute, TopOffersRoute } from './api/routes';

dotenv.config();
const app = express();
app.use(helmet());
const PORT = process.env.PORT || 8000;

// Middleware to log requests
app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

// Mount the router for handling location data fetch
app.use('/api/data', LocationDataRoute);
app.use('/api/data', TopOffersRoute);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack || err.message);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});