module.exports = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({status : 500, message : 'internal server error', error : err});
}