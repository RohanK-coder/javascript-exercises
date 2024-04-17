const removeFromArray = function(array,removeNum) {
    let arr = array.filter((item) => item!==removeNum);
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
