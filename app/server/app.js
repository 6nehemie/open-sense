import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from './middlewares/errorHanlderMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authMiddleware, userRouter);

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// Catch errors without crashing the server
app.use(errorHandlerMiddleware);

export default app;
