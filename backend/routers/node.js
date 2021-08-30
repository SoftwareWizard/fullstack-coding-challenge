const express = require('express');
const router = express.Router();

const node = require('../data/node.data.json');

router.get('/', (request, response) => {
    return response.send(node);
});

module.exports = router;