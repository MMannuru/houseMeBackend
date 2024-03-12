const Listing = require('../models/Listing.js');
const express = require('express');
const router = express.Router();

// Route to get all listings from our database
router.get('/', async (request, response) => {
    try {
      const listings = await Listing.find({});
  
      return response.status(200).json({
        count: listings.length,
        data: listings,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });
  
  // Route to only get one listing by its ID from our database
  router.get('/:id', async (request, response) => {
    try {
      const { id } = request.params;
  
      const listing = await Listing.findById(id);
  
      return response.status(200).json(listing);
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

  module.exports = router;