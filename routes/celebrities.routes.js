// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require('express').Router()

// create the route to send to database
const Celebrity = require('../models/Celebrity.model')


// all your routes here

//In the routes file (routes/celebrities.routes.js) create the following GET route: /celebrities/create
//In that route we have to render the celebrities/new-celebrity view
router.get('/create', (req, res) => {
    res.render('celebrities/new-celebrity')
  })


  //Creating a route for the celebrities page so ze can redirect later
  router.get('/create', (req, res) => {
    res.render('celebritiesç')
  })


// create the POST route & the promise so we send the info to the compass db
router.post('/create', async(req,res) => {
    try{
        await Celebrity.create(req.body)
        res.render('celebrities/new-celebrity')
        res.redirect('/celebrities');
       
    }
    catch(error){
        console.log(error)
    }
    
})


module.exports = router