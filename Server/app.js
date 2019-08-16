const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv')

const bodyParser = require('body-parser');
const mongoConnection = require('./Repositories/mongoDb/Connections');

const TestRouter = require('./Controllers/TestController');
const UserRouter = require('./Routes/user');
const locationRouter = require('./Routes/locations');
const weatherRouter = require('./Routes/weather')
const authRouter = require('./Routes/auth');

const logRequest = require('./Middleware/RequestLogMiddlware')

app.use(cors())
app.use(helmet())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logRequest)

dotenv.config();



app.use("/Test", TestRouter);
app.use("/User", UserRouter);
app.use("/location", locationRouter);
app.use("/weather", weatherRouter);
app.use("/auth", authRouter)

if (process.env.NODE_ENV == 'development') {
    mongoConnection.StartConnection();

}
else if(process.env.NODE_ENV == 'Test'){
    
}

process.once('uncaughtException', err => {
    console.error('Uncaught exception caught from custom handler ' + err.stack || err);
    process.exit(1);
})

process.on('uncaughtException', err => {
    console.error('Uncaught exception caught from custom handler ' + err.stack || err);
})


module.exports = app;