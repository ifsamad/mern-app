const ensureAuthenticated = require('../Middlewares/Auth');
const express = require('express');

const router = express.Router();

// Define the routes with validation middleware and corresponding controllers
router.get('/', ensureAuthenticated, (req,res)=>{
    res.status(200).json([
        {
            name : "mobile",
            price: 10000
        },
        {
            name : "tv",
            price: 20000
        }
    ])
});


module.exports = router;
