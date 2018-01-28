function insertionSort(arr) {
  //go through the array in pairs until you find a number smaller than the one before it
  //switch it with the number before it
  //go back an index, check max/min, switch it if it is the wrong order
  //continue until it's the right order
  //start back where you left off, find the next num out of order
  for(let i=1; i < arr.length; i++){
    for(let j=(i-1); j>=0; j--) {
      let movingIndex = j+1
      if(arr[movingIndex] < arr[j]) {
        arr = swap(arr, movingIndex, j)
      }else {
        break
      }
    }
  }
  return arr
}

function swap(arr, smaller, bigger) {
  let temp = arr[bigger]
  arr[bigger] = arr[smaller]
  arr[smaller] = temp
  return arr
}
