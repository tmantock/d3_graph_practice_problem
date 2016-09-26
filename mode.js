function mode(array) {
  //Use CountInsatnce to store the greatest frequency of a number
  let countInstance = 0;
  //use numberObjectContainer to store the reference for all the numbers and their count values
  let numberObjectContainer = {};
  //intitialize a modeValue set to zero
  let modeValue = 0
  //iterate over the array of numbers
  array.map((number) => {
    //if the number key exists in the numberObjectContainer
    if(numberObjectContainer[number]){
      //increment it's value by 1
      numberObjectContainer[number] = numberObjectContainer[number] + 1;
    } else {
      //if the number key doesn't exist yet then set it's value to 1
      numberObjectContainer[number] = 1;
    }
    //if the countInstance (initially 0) is less than the value for the number in numberObjectContainer object
    if(countInstance < numberObjectContainer[number]) {
      //set the countInstance equal to the value of the number key in the numberObjectContainer (ex. from 0 to 1)
      countInstance = numberObjectContainer[number];
      //modeValue is set to the number with the highest frequency
      modeValue = number;
    }
  });
  //console.log for checking
  console.log(modeValue);
  //return the mode for use later on
  return modeValue;
}

mode([1,2,3,3,4,4,5,6,6,6,7,8,9]);
