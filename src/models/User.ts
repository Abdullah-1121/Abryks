import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
    unique: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: false,
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;