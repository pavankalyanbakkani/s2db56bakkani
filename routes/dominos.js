var express = require('express');
const dominos_controlers= require('../controllers/dominos');
var router = express.Router();

/* GET home page. */
router.get('/', dominos_controlers.dominos_view_all_Page );

router.get('/detail', dominos_controlers.dominos_view_one_Page);
router.get('/create', dominos_controlers.dominos_create_Page);

module.exports = router;