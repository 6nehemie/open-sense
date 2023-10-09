import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';
import cookieParser from 'cookie-parser';
import errorHandlerMiddleware from './middlewares/errorHanlderMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';
import cloudinary from 'cloudinary';

// Public
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_API_SECRET,
//   secure: true,
// });

cloudinary.v2.config({
  cloud_name: 'db7ums0sv',
  api_key: '566732588993215',
  api_secret: 'lN6xHUzfAPs4FxMWXxQ79XsB0_M',
  secure: true,
});

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// allow access to public folder to get images
app.use(express.static(path.resolve(__dirname, './public')));

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
