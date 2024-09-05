import express from 'express'
import { register } from '../controllers/register.js'

export const router = express.Router();

// POST
router.post('/', register);