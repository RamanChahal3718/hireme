const mongoose = require('mongoose');

//create schema form an employer document
const employerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    city: {
        type: String,
        required: 'City is required'
    },
    contactEmail: {
        type: String
    },
    comments: {
        type: String
    },
    employees: {
        type: Number
    }

});

module.exports = mongoose.model('Employer', employerSchema);