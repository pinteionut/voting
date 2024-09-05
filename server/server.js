import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import { router as loginRoutes } from './routes/login.js'
import { router as registerRoutes } from './routes/register.js'
import { Users } from './services/Users.js'
import { connectDB } from './utils/db.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);

async function startServer() {
  await connectDB();
  Users.createUserTable();
  app.listen(3000)
}


startServer()