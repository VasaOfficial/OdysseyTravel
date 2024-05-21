import { Request, Response } from 'express';
import prisma from '../../../prisma/prisma';
import logger from '../../log/logger';

export const getLocationsByContinent = async (req: Request, res: Response) => {
    try {
        const { continent } = req.params;

        logger.info(`Fetching locations for continent: ${continent}`);

        const data = await prisma.continent.findMany({
            where: {
                name: continent
            },
            include: {
                countries: {
                    include: {
                        destinations: true
                    },
                }
            }
        });

        logger.info(`Successfully fetched locations for continent: ${continent}`);
        res.json(data);
    } catch (error) {
        logger.error(`Error fetching locations for continent:  ${error.message}`, error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};