const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  storeId: {
    type: String,
    required: [true, 'please add a store ID'],
    unique: true,
    trim: true,
    maxlength: [10 , 'Store ID must be less than 10 characters']
  },
  address: {
    type: String,
    required: [true, 'Please enter address']
  }
  location: {
    type: {
      type: String,
      enum: ['Point']
    },
    coordinates: {
      type: ['Number'],
      index: '2dsphere'
    },
    formattedAddress: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Store', StoreSchema);
