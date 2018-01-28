function selectionSort(arr) {
  // find minimum of remaining nums
  //put minimum at beginning
  //repeat from next index
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
