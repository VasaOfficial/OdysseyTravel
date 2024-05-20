import express from 'express';
import { getTopOffersData} from '../controllers/TopOffersController';

const router = express.Router();

router.get('/topOffers', getTopOffersData);

export { router as TopOffersRoute };