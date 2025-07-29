import cors from 'cors';
import cookieParser from 'cookie-parser';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

//Allow multiple origins
const allowedOrigins = ['http://localhost:3000'];

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
