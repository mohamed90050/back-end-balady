// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import jwt from 'jsonwebtoken';
// import dotenv from 'dotenv';
// import licenseRoutes from '../routes/license.js';

// dotenv.config();
// const app = express();
// // app.use(cors());
// app.use(cors({
//   origin: 'https://app-balady-gov-sa.vercel.app', // رابط الفرونت إند على Vercel
//   methods: ['GET', 'POST', 'PUT', 'DELETE' ,'PATCH'],
//   credentials: true
// }));

// app.use(express.json());

// mongoose.connect(process.env.MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

// const adminUser = { email: 'admin@balady.com', password: '607080' };
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;
//   if (email.trim().toLowerCase() === adminUser.email && password.trim() === adminUser.password) {
//     const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return res.json({ token, email });
//   } else {
//     return res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// app.use('/api/licenses', licenseRoutes);

// const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// export default app;











import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import licenseRoutes from '../routes/license.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: [
    'https://app-balady-gov-sa.vercel.app',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  credentials: true
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const adminUser = { email: 'admin@balady.com', password: '607080' };

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  if (
    email.trim().toLowerCase() === adminUser.email &&
    password.trim() === adminUser.password
  ) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.json({ token, email });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.use('/api/licenses', licenseRoutes);

// ✅ Error handlers
process.on("uncaughtException", (err) => console.error("🔥 Uncaught Exception:", err));
process.on("unhandledRejection", (reason) => console.error("🔥 Unhandled Rejection:", reason));

const PORT = process.env.PORT || 5000;

// لو Vercel → مينفعش listen
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

export default app;
