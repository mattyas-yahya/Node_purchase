const express = require('express');
const app = express();
// const port = 3000;
const port =ep-frosty-recipe-a4t4af50-pooler.us-east-1.aws.neon.tech;
const path = require('path');
const cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const purchaseRoutes = require('./routes/purchase_routes');
const purchaseLineRoutes = require('./routes/purchase_line_routes');
const purchase_order_routes = require('./routes/purchase_order_routes');
const InventoryRoutes = require('./routes/inventory_routes');
const SalesRoutes = require('./routes/sales_routes');
const LoginRoutes = require('./routes/login_routes');
const PrintRoutes = require('./routes/print_routes');
require('dotenv').config();


// Middleware untuk meng-handle form data
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/purchase', purchaseRoutes);
app.use('/purchase_line', purchaseLineRoutes);
app.use('/Inventory', InventoryRoutes);
app.use('/purchase_order', purchase_order_routes);
app.use('/sales', SalesRoutes);
app.use('/login', LoginRoutes);
app.use('/print', PrintRoutes);



app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/signup_success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'signup_success.html'));
});

sequelize.sync().then(() => 
{
  // Jalankan Server
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});



