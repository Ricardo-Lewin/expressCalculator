

function makeNumArr(string) {
    let numArr = string.split(',').map(char => {
        return Number(char);
    });
    return numArr
}



function getMean(array) {
    let sum = 0;

    array.forEach(function(num) {
        sum += num
    });

    avg = sum / array.length

    return avg
}



function getMedian(array) {
//sort the array
array.sort((a, b) => a - b)
console.log(array)
let median;

//if else block to check for even or odd
if(array.length%2 != 0){
    //odd case
    
    //find middle index
    let middleIndex = Math.floor(array.length/2)

    //find median
    median = array[middleIndex]
}else{
    //even case
    console.log("EVEN CASE")
    //find middle index
    let middleIndex = Math.floor(array.length/2)
    
    //find median
    median = (array[middleIndex -1] + array[middleIndex])/2
}
return median 
}



function getMode(array) {
    // count amount of occurences of each number
  
    // create object
    const obj = {};
    // loop over array
    array.forEach(number => {
      // for each number in array,
      // if it doesn't already exist as a key on the
      // object, create one and set its value to 1.
      if (!obj[number]) {
        obj[number] = 1;
      } else {
        // if it already exists as key on the object,
        // increment its corresponding value.
        obj[number] += 1;
      }
    });
    
    // return object key with highest value.
    let highestValue = 0;
    let highestValueKey = -Infinity;
  
    for (let key in obj) {
      const value = obj[key];
      if (value > highestValue) {
        highestValue = value;
        highestValueKey = key;
      }
    }
  
    // convert key back to number
    return Number(highestValueKey);
  }


  module.exports = {
    makeNumArr: makeNumArr,
    getMean: getMean,
    getMedian: getMedian,
    getMode:getMode
  };