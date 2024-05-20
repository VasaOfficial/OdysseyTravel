import { Request, Response } from 'express';
import prisma from '../../../prisma/prisma';

export const getLocationsByContinent = async (req: Request, res: Response) => {
    try {
        const { continent } = req.params;

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
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};