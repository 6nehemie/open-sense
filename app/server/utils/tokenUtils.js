import jwt from 'jsonwebtoken';

export const createToken = (user) => {
  const payload = {
    userId: user._id,
    email: user.email,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

// export const verifyToken = (token) => {
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//   return decoded;
// };
