var express = require('express');
const dominos_controlers= require('../controllers/dominos');
var router = express.Router();

/* GET home page. */
router.get('/', dominos_controlers.dominos_view_all_Page );


module.exports = router;