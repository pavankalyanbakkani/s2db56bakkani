var express = require('express');
const dominos_controlers= require('../controllers/dominos');
var router = express.Router();


// A little function to check if we have an authorized user and continue on 
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET home page. */
router.get('/', dominos_controlers.dominos_view_all_Page );

router.get('/detail', dominos_controlers.dominos_view_one_Page);
router.get('/create',secured, dominos_controlers.dominos_create_Page);
router.get('/update',secured, dominos_controlers.dominos_update_Page);
router.get('/delete',secured, dominos_controlers.dominos_delete_Page);
module.exports = router;