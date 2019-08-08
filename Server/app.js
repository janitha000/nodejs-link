const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

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



app.use("/Test", TestRouter);
app.use("/User", UserRouter);
app.use("/location", locationRouter);
app.use("/weather", weatherRouter);
app.use("/auth", authRouter)



mongoConnection.StartConnection();



module.exports = app;