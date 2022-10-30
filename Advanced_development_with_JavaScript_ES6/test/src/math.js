class Math {
    sum(a,b){
        return a + b;
    }

    timerSum(a, b, callback){
        setTimeout(()=>{
            callback(a + b);
        }, 1500);
    }

    multiply(a, b){
        return a * b;
    }

    printSum(req, res, a, b){
        res.load("index", a + b);
    }
}

module.exports = Math;