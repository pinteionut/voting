import express from 'express'
import { doLogin } from '../controllers/login.js'

export const router = express.Router();

// POST
router.post('/', doLogin);