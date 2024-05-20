import { Request, Response } from 'express';
import prisma from '../../../prisma/prisma'

export const getTopOffersData = async (req: Request, res: Response) => {
  try {
    // Query the database for top offers
    const data = await prisma.topOffers.findMany()       

    // If the top offers were not found, return a 404 response
    if (!data) {
        return res.status(404).json({ message: 'Top offers not found' });
    }

    res.json(data);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
}