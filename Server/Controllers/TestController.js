const express = require('express');
const TestRouter = express.Router();

TestRouter.route('/').get((req, res) => {
    res.send('Hello from Janitha');
})

module.exports = TestRouter;
