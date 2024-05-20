import express from 'express';
import { getLocationsByContinent } from '../controllers/LocationsController';

const router = express.Router();

router.get('/locations/:continent', getLocationsByContinent);

export { router as LocationDataRoute };