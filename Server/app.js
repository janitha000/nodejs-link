const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoConnection = require('./Repositories/mongoDb/Connections');

const TestRouter = require('./Controllers/TestController');
const UserRouter = require('./Routes/user');
const locationRouter = require('./Routes/locations');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/Test", TestRouter);
app.use("/User", UserRouter);
app.use("/location", locationRouter);

mongoConnection.StartConnection();



module.exports = app;