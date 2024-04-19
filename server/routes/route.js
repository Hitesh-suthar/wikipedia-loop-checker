const express = require('express');
const router = express.Router();
const checkWikiLoop = require('./../middleware/wiki');

// feches url from front end and sends back response
router.post('/check-loop', async (req, res) => {
    const { url } = req.body;
    try {
        const loopData = await checkWikiLoop(url);
        res.json(loopData);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;