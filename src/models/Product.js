import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative'],
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference to Category model
    required: [true, 'Product category is required'],
  },
  image: {
    type: String, // URL of the product image
    required: [true, 'Product image is required'],
  },

});

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);
