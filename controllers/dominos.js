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
exports.dominos_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await dominos.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
   
 
// Handle dominos update form on PUT. 
exports.dominos_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await dominos.findById( req.params.id)
    // Do updates of properties
    if(req.body.Itemname)
    toUpdate.Itemname = req.body.Itemname;
    if(req.body.Quantity) toUpdate.Quantity = req.body.Quantity;
    if(req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
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


// Handle a show one view with id specified by query
exports.dominos_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await dominos.findById( req.query.id)
    res.render('dominosdetail',
    { title: 'dominos Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dominos_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('dominoscreate', { title: 'dominos Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.dominos_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await dominos.findById(req.query.id)
    res.render('dominosupdate', { title: 'dominos Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle a delete one view with id from query
exports.dominos_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await dominos.findById(req.query.id)
    res.render('dominosdelete', { title: 'dominos Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };