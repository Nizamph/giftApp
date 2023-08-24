const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
connectDB();
app.get('/', (req, res) => {
  res.send('api is running successfully');
});

app.use('/api/user', userRoutes);
app.use('/api', orderRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
