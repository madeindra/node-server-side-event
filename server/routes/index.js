// import libraries
const router = require('express').Router();

// import controllers
const controllers = require('../controllers');

// api routes
router.get('/events', controllers.events);

// export router
module.exports = router;