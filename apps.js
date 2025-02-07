require('dotenv').config(); // Panggil dotenv di awal

const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Gunakan PORT dari .env atau default ke 3000
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');

// Import Routes
const purchaseRoutes = require('./routes/purchase_routes');
const purchaseLineRoutes = require('./routes/purchase_line_routes');
const purchase_order_routes = require('./routes/purchase_order_routes');
const InventoryRoutes = require('./routes/inventory_routes');
const SalesRoutes = require('./routes/sales_routes');
const LoginRoutes = require('./routes/login_routes');
const PrintRoutes = require('./routes/print_routes');

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS Headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

// Routes
app.use('/purchase', purchaseRoutes);
app.use('/purchase_line', purchaseLineRoutes);
app.use('/Inventory', InventoryRoutes);
app.use('/purchase_order', purchase_order_routes);
app.use('/sales', SalesRoutes);
app.use('/login', LoginRoutes);
app.use('/print', PrintRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes for HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/signup_success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup_success.html'));
});

// Sync Database & Start Server
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server running at http://localhost:${port}`);
    });
  })
  .catch(err => {
    console.error('❌ Database sync failed:', err);
  });
