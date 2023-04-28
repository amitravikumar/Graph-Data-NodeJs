const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    end_year: {
        type: String,
        trim: true
    },
    intensity: {
        type: Number,
        trim: true
    },
    sector: {
        type: String,
        trim: true
    },
    topic: {
        type: String,
        trim: true
    },
    insight: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        trim: true
    },
    region: {
        type: String,
        trim: true
    },
    start_year: {
        type: String,
        trim: true
    },
    impact: {
        type: String,
        trim: true
    },
    added: {
        type: String,
        trim: true
    },
    published: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    relevance: {
        type: Number,
        trim: true
    },
    pestle: {
        type: String,
        trim: true
    },
    source: {
        type: String,
        trim: true
    },
    title: {
        type: String,
        trim: true
    },
    likelihood: {
        type: Number,
        trim: true
    },
});

module.exports = mongoose.model('getData', DataSchema, 'getData');