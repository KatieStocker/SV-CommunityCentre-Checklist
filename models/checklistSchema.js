const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
    CommunityCentre: { type: Object, required: true }
});

module.exports = mongoose.model('Checklist', checklistSchema);