function bubbleSort(arr) {
  if (!arr) {
    return []
  }
  var length = arr.length + 1
  for (var j = 0; j < length; j++) {
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        var step = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = step
      }
    }
    length--
  }
  return arr
}
