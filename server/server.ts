const express = require('express');
require('dotenv').config()
const cors = require('cors');
const { PrismaClient } = require('@prisma/client')
import { Request, Response } from 'express';

const prisma = new PrismaClient()
const app = express()
const PORT = process.env.PORT || 8000

app.use(cors({
  origin: 'http://localhost:3000',
}));

app.use(express.json())

app.get('/test', (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: 'API is working'})
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
});

app.get('/destinations', async (req: Request, res: Response) => {
  try {
    const destinations = await prisma.destinations.findMany()
    res.status(200).json(destinations)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.get('/destinations/:id', async (req: Request, res: Response) => {
  try {
    const destinations = await prisma.destinations.findUnique({
      where: {
        id: Number(req.params.id)
      },
    })
    res.status(200).json(destinations)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))