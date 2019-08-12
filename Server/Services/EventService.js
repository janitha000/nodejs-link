const Emitter = require('../Events/TestEmmitter');

exports.fire_emitter = () => {
    const emitter = new Emitter();
    emitter.emit('fire', Date.now());
    console.log('Event fired');
}


