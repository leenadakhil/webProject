const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
    age_group: { type: String, required: true },
    fabric_type: { type: String, required: true },
    measurements: {
        bust: { type: Number, required: true },
        waist: { type: Number, required: true },
        hips: { type: Number, required: true },
        shoulder_to_waist: { type: Number, required: true },
        waist_to_hem: { type: Number, required: true },
        height: { type: Number, required: true }
    },
    delivery_date: { type: Date, required: true },
    delivery_time: { type: String, required: true }
});

module.exports = mongoose.model('Request', requestSchema);
