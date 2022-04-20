var express = require('express');
const dominos_controlers= require('../controlers/dominos')
var router = express.Router();

/* GET home page. */
router.get('/', dominos_controlers.dominos_view_all_page);

router.get('/detail', costume_controlers.costume_view_one_Page);


module.exports = router;