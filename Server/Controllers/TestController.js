const express = require('express');
const TestRouter = express.Router();
const {fork, spawn, execFile} = require('child_process')

const eventService = require('../Services/EventService');


TestRouter.route('/').get((req, res) => {
    res.send('Hello from Janitha');
})

TestRouter.route('/compute').get((req, res) => {
    const compute = fork('./Logics/compute.js')
    compute.send('start');

    compute.on('message', result => {
        res.json(result)
    })

    compute.on('close', code => {
        console.log('Exited with code ' + code);
    })
})

TestRouter.route('/spawn').get((req, res) => {
    spawn('git', ['log']).stdout.pipe(process.stdout)
})

TestRouter.route('/execfile').get((req, res) => {
    execFile('git', ['log'], (err, out) => {
        if (err){
            console.error(err);
        }
        else{
            res.send(out);
        }
    })
})

TestRouter.route('/event').get((req, res) => {
    eventService.fire_emitter();
    res.send('OK');
})


module.exports = TestRouter;
