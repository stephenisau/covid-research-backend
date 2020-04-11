const parseStringToNum = (str) => {
  let numsArr = str.split(',');
  let sum = 0;
  for (let num in numsArr) {
    sum += +num;
  }
  return sum;
}


const incrementNum = (num) => {
  // increment our number by a random amount
}