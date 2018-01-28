// O(n^2)

function selectionSort(arr) {
  // find minimum of the array (the first time around this is the entire array)
  //select minimum and swap with the first element of the array
  //repeat for a new smaller array that starts from next index
  for(let j=0; j<arr.length; j++) {
    let minIndex = j
    for(let i= minIndex + 1; i<arr.length; i++) {
      if(arr[minIndex] > arr[i]){
        minIndex = i
      }
    }
    let temp = arr[j]
    arr[j] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}
