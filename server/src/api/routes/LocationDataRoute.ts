import { Router } from 'express';
import { getLocationsByContinent } from '../controllers/LocationsController';

const router = Router();

router.get('/locations/:continent', getLocationsByContinent);

export { router as LocationDataRoute };