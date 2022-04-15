const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
    CommunityCentre: { type: Array, required: true }
});

module.exports = mongoose.model('Checklist', checklistSchema);