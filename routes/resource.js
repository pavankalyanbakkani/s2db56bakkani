var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var dominos_controller = require('../controllers/dominos'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// dominos ROUTES /// 
 
// POST request for creating a dominos.  
router.post('/dominos', dominos_controller.dominos_create_post); 
 
// DELETE request to delete dominos. 
router.delete('/dominos/:id', dominos_controller.dominos_delete); 
 
// PUT request to update dominos. 
router.put('/dominos/:id', dominos_controller.dominos_update_put); 
 
// GET request for one dominos. 
router.get('/dominos/:id', dominos_controller.dominos_detail); 
 
// GET request for list of all dominos items. 
router.get('/dominos', dominos_controller.dominos_list); 
 
module.exports = router; 