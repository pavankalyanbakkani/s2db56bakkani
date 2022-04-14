var dominos = require('../models/dominos'); 
 
// List of all dominos 
exports.dominos_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos list'); 
}; 
 
// for a specific dominos. 
exports.dominos_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos detail: ' + req.params.id); 
}; 
 
// Handle dominos create on POST. 
exports.dominos_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos create POST'); 
}; 
 
// Handle dominos delete form on DELETE. 
exports.dominos_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos delete DELETE ' + req.params.id); 
}; 
 
// Handle dominos update form on PUT. 
exports.dominos_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos update PUT' + req.params.id); 
}; 