function arraySearch(arr, searchItem) {
  let sortedArray = [...arr].sort((a, b) => a - b);
  let middle = Math.ceil(sortedArray.length / 2);
  if (searchItem == sortedArray[middle]) {
    return true;
  }
  else if (searchItem < sortedArray[middle]) {
    let leftArray = sortedArray.splice(0, middle)
    return arraySearch(leftArray, searchItem)
  }
  else if (searchItem > sortedArray[middle]) {
    let rightArray = sortedArray.splice(middle)
    return arraySearch(rightArray, searchItem)
  }
  return false
}