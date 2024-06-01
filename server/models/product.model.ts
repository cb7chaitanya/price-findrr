import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    url: { 
        type: String, 
        required: true 
    },
    currency: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    },
    currentPrice: { 
        type: Number, 
        required: true 
    },
    originalPrice: { 
        type: Number, 
        required: true 
    },
    lowestPrice: { 
        type: Number 
    },
    highestPrice: { 
        type: Number 
    },
    averagePrice: { 
        type: Number 
    },
    priceHistory: [
        {
            price: { type: Number, required: true },
            date: { type: Date, required: true }
        }
    ],
    discount: { 
        type: Number 
    },
    description: { 
        type: String 
    },
    reviewCount: { 
        type: Number 
    },
    stockStatus: { 
        type: Boolean, 
        default: false 
    },
    users: [
        {
            email: {
                type: String, 
                required: true
            }
        }
    ], default: []
}, { timestamps: true });

const Product = mongoose.model("Product", productSchema);

export default Product;