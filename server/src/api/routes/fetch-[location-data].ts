import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/api/data/:continent', async (req, res) => {
    try {
        // Extract the continent parameter from the request
        const { continent } = req.params;

        // Query the database for data specific to the requested continent
        const data = await prisma.continent.findFirst({
            where: {
                name: continent
            }
        });

        // If the continent is not found, return a 404 response
        if (!data) {
            return res.status(404).json({ message: 'Continent not found' });
        }

        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;