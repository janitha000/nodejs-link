const longComputation = (value) => {
    if(value < 1){
        throw Error ('Number must be greater than 0');
    }
    let sum = 0;
    for(let i = 0; i < value; i++){
        sum += i;
    }
    console.log(sum);
    return sum;
}

module.exports = longComputation;

process.on('message', message => {
    if(message == 'start'){
        const result = longComputation(1000);
        process.send(result);
    }
    else{
        process.send('Do I need to start the computation')
    }

})