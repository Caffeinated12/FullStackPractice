const mongoose = require('mongoose');

const { Schema } = mongoose;

const String_is_required = {type: String, required: true}

const logEntrySchema = new Schema({
    Title: String_is_required,
    Description: String,
    Comments: String,
    Rating: {
        type: Number,
        min: 0,
        max: 10,
        default: 0,
    },
    Image: String,
    Latitude: {
        type: Number,
        required: true,
        min: -90,
        max: 90,
    },
    Longitude: {
        type: Number,
        required: true,
        min: -180,
        max: 180
    },
    visitate: {
        type: Date,
        required: true,
    }
},{
    timestamps: true,
})

const LogEntry = mongoose.model('LogEntry', logEntrySchema) 
module.exports = LogEntry;