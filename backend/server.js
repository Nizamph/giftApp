const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/products', productRoutes);

// -----------------Deployment------------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname1, '/frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname1, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('api is running successfully');
  });
}
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
