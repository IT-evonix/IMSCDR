const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const errorHandler = require('./middleware/errorHandler');
const contactController = require('./controllers/contactController');

const app = express();

// Basic Express Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files as static assets from /public/uploads
app.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));

// Direct shortcut route for downloading contact enquiries
app.get('/contacts-excel', contactController.downloadContactsCsv);

// Mount all API routes under /api
app.use('/api', routes);

// Global Error Handler
app.use(errorHandler);

module.exports = app;
