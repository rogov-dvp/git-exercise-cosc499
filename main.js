const arrInt = [1,5,2,12,3,32,52,14,23,1,9];

feature2(arrInt);

//functions:
function feature2(arr) {
  let sum = 0;
  arr.forEach(num => {
    sum += num;
  }); 
  return sum;
}
module.exports = feature2;