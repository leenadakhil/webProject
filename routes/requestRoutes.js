const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Create a new request
router.post('/', async (req, res) => {
    const { age_group, fabric_type, measurements, delivery_date, delivery_time } = req.body;
    try {
        const newRequest = new Request({ age_group, fabric_type, measurements, delivery_date, delivery_time });
        await newRequest.save();
        res.status(201).json({ message: 'Request created successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all requests
router.get('/', async (req, res) => {
    try {
        const requests = await Request.find();
        res.json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
