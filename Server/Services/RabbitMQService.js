const ampq = require('amqplib');

const CONN_UTL = 'amqp://xzotkmzg:Yl96oCx0zmJGrpciwNMeKp7ZPXL0reob@jaguar.rmq.cloudamqp.com/xzotkmzg';
let ch = null;

ampq.connect(CONN_UTL, (err, conn) => {
    conn.createChannel((err, channel) => {
        ch = channel;
    })
})

export const publishToQueue = async (queueName, data) => {
    ch.sendToQueue(queueName, new Buffer(data));
}

process.on('exit', code => {
    ch.close();
    console.log('Closing rabbitMQ channel')
})