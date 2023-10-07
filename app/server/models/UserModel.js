import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  avatar: String,
  avatarId: String,
});

// UserSchema.methods.toJSON = function () {
//   return this.toObject();
// };

export default mongoose.model('User', UserSchema);
