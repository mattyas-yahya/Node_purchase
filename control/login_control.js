const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Your secret key:', secretKey);
app.use(bodyParser.json());

// Simulasikan database pengguna
const users = [
  { id: 1, username: 'user1', password: '$2b$10$wSWvUWuViXK4dIaCnR6HCu7J7lbStCn/l2dR/9VXsNE4hj0DJMqPa' } // Password: secret123
];

// Middleware untuk verifikasi token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied, token not provided' });

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Endpoint untuk login
// app.post('/login', (req, res) => 
// {
//   const { username, password } = req.body;

//   const user = users.find(u => u.username === username);
//   if (!user) return res.status(404).json({ message: 'User not found' });

//   bcrypt.compare(password, user.password, (err, result) => {
//     if (result) {
//       const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
//       res.json({ token });
//     } else {
//       res.status(401).json({ message: 'Invalid password' });
//     }
//   });
// });
exports.createLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);
  if (!user) return res.status(404).json({ message: 'User not found' });

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid password' });
    }
  });
};

// Endpoint yang memerlukan token untuk akses
app.get('/secure-data', verifyToken, (req, res) => {
  res.json({ message: 'Secure data accessed successfully', user: req.user });
});


