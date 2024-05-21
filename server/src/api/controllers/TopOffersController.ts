import { Request, Response } from 'express';
import prisma from '../../../prisma/prisma'
import logger from '../../log/logger';

export const getTopOffersData = async (req: Request, res: Response) => {
  try {
    logger.info('Fetching top offers');

    // Query the database for top offers
    const data = await prisma.topOffers.findMany()     
    
    // If the top offers were not found, return a 404 response
    if (!data) {
        logger.warn('Top offers not found');
        return res.status(404).json({ message: 'Top offers not found' });
    }

    logger.info('Successfully fetched top offers');
    res.json(data);
  } catch (error) {
      logger.error(`Error fetching top offers: ${error.message}`, error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
}