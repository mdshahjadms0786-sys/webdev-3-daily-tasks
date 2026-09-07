const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');
const noteRoutes = require('./routes/noteRoutes');
// use morgan middleware for logging
app.use(morgan('dev'));

// built-in middleware to handle JSON data
app.use(express.json());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request Headers:', req.headers);
  res.send('Home Page');
});

app.use('/api', noteRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});