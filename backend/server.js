const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
app.get('/', (req, res) => {
  res.send('api is running successfully');
});

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/products', productRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
