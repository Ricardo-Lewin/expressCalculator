const { makeNumArr, getMean, getMedian, getMode } = require('./math');
const express = require('express');
const ExpressError = require("./error")
const app = express();

app.use(express.json());




app.get('/mean', function(request, response, next) {
    
    try{
        const { nums } = request.query;

        if (nums == undefined) {
            throw new ExpressError("Please include numbers in your query", 404);
        }
        numArr = makeNumArr(nums);

        if (numArr.includes(NaN) == true) {
            throw new ExpressError("Please include only numbers", 404);
        }

        mean = getMean(numArr);
    
        output = {
            operation: "mean",
            value: mean
        } 
        return response.json(output)
        }  catch (err) {
        return next(err);
    }
    // split string into array and make int
});




app.get('/median', function(request, response, next) {

    try{
        const { nums } = request.query;
        if (nums == undefined) {
            throw new ExpressError("Please include numbers in your query", 404);
        }
        numArr = makeNumArr(nums);

        if (numArr.includes(NaN) == true) {
            throw new ExpressError("Please include only numbers", 404);
        }
        median = getMedian(numArr)
    
        output = {
        operation: "median",
        value: median
        } 
        return response.json(output);
    } catch (err) {
        return next(err);
    }
});


app.get('/mode', function(request, response) {
    try {
        const { nums } = request.query;
        if (nums == undefined) {
            throw new ExpressError("Please include numbers in your query", 404);
        }
        numArr = makeNumArr(nums);

        if (numArr.includes(NaN) == true) {
            throw new ExpressError("Please include only numbers", 404);
        }
        mode = getMode(numArr)

        output = {
            operation: "mode",
            value: mode
        } 
    
        return response.json(output);
    } catch (err) {
        return next(err);
    }   
});


app.get('/all', function(request, response, next) {
    try {
        const { nums } = request.query;
        if (nums == undefined) {
            throw new ExpressError("Please include numbers in your query", 404);
        }
        numArr = makeNumArr(nums);

        if (numArr.includes(NaN) == true) {
            throw new ExpressError("Please include only numbers", 404);
        }

        mode = getMode(numArr);
        median = getMedian(numArr);
        mean = getMean(numArr);

        output = {
            operation: "all",
            mean: mean,
            median: median,
            mode: mode
        } 
    
        return response.json(output);
    } catch (err) {
        return next(err);
    }   
});



// 404 handler
app.use(function (req, res, next) {
    const notFoundError = new ExpressError("Not Found", 404);
    return next(notFoundError)
  });
  
  // generic error handler
  app.use(function(err, req, res, next) {
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.message;
  
    // set the status and alert the user
    return res.status(status).json({
      error: {message, status}
    });
  });
  
  // end generic handler


app.listen(3000, function () {
  console.log('App on port 3000');
})