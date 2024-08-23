import 'dotenv/config';
import express from 'express';
import { errorMiddleware } from 'middlewares/errorMiddleware';
import demoRoutes from 'routes/demoRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/', demoRoutes);
app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

function init() {
  try {
    app.listen(PORT, () => {
      console.log(`Express App Listening on Port ${PORT}`);
    });
  } catch (error) {
    console.error(`An error occurred: ${JSON.stringify(error)}`);
    process.exit(1);
  }
}

init();
