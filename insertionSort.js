// O(n^2)

// Bubble sort: does not move the element all the way to it's proper place, it just switches and moves on, and then repeats the entire process until they're all sorted.
// So difference between Insertion Sort and Bubble Sort is that Insertion sort, after switching two, will go back and index and check if the just-moved element needs to be switched again. Bubble sort does not do this, it just buldozes through every pair in the array and then starts over from the beginning.

function insertionSort(arr) {
  //go through the array in pairs until you find a number smaller than the one before it
  //switch it with the number before it
  //go back an index, check max/min, switch it if it is the wrong order (this step is skipped in bubble sort)
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
