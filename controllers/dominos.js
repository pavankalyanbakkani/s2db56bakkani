var dominos = require('../models/dominos'); 
 
// List of all dominos 
exports.dominos_list = async function(req, res) { 
    try{ 
        thedominos = await dominos.find(); 
        res.send(thedominos); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};  
 
// for a specific dominos. 
exports.dominos_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await dominos.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    }; 
 
 
// Handle dominos create on POST. 
exports.dominos_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new dominos(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.Itemname = req.body.Itemname; 
    document.Quantity = req.body.Quantity; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
  
 
// Handle dominos delete form on DELETE. 
exports.dominos_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos delete DELETE ' + req.params.id); 
}; 
 
// Handle dominos update form on PUT. 
exports.dominos_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: dominos update PUT' + req.params.id); 
}; 

// VIEWS 
// Handle a show all view 
exports.dominos_view_all_Page = async function(req, res) { 
    try{ 
        thedominos = await dominos.find(); 
        res.render('dominos', { title: 'dominos Search Results', results: thedominos }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};