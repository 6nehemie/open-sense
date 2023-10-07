import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from './middlewares/errorHanlderMiddleware.js';

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/auth', authRouter);

// Catch errors without crashing the server
app.use(errorHandlerMiddleware);

export default app;
