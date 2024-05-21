import { Router } from 'express';
import { getTopOffersData} from '../controllers/TopOffersController';

const router = Router();

router.get('/topOffers', getTopOffersData);

export { router as TopOffersRoute };