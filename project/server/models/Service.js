import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },  
  price: {
    type: Number,
    required: true,
  },
  image: String,
  // provider: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  // },
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
  availability: [{
    date: Date,
    slots: [{
      time: String,
      isBooked: Boolean,
    }],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Service', serviceSchema);