const EventEmitter =require('events');

class TestEmmitter extends EventEmitter {}

const emitter = new TestEmmitter();

emitter.on('fire', time => {
   // setImmediate (() => {
        console.log('Emitter fired at ' + time + 'Exact time ' + Date.now())
    //});

})

module.exports = TestEmmitter;