function binarySearch(array, value, start, end) {
  // defining the start and end of the array
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  // finding the index of the middle value
  const index = Math.floor((start + end) / 2);
  // finding the item at the middle index value
  const item = array[index];

  console.log(start, end);
  // if the value matches return the index
  if (item == value) {
    return index;
    // if the item is lower than or greater than the value
    //    call recursive function
  } else if (item < value) {
    // right hand side of the array
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    // left hand side of the array
    return binarySearch(array, value, start, index - 1);
  }
}
