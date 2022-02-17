// import libraries
const cors = require('cors');
const express = require('express');

// import routes
const routes = require('./routes');

// dynamic value
const PORT = process.env.port || 3000;

// initialize express
const app = express();

// apply middleware
app.use(cors()); // warning! cors enabled for all

// apply routes
app.use(routes);

// run app
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));