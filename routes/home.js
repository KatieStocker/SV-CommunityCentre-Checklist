const express = require('express');
const router = express.Router();
const Checklist = require('../models/checklistSchema');

router.use(express.json());

router.route('/')
    .get((req, res) => {
        Checklist.find((error, checklistData) => {
            if (error) {
                res.status(404).send('Not found');
            }
            else {
                res.json(checklistData);
            }
        });
    });

module.exports = router;