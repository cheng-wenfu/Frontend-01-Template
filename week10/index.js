let arr = ["welcome", "to", "see", "you", "in", "touchdata"];
function sort(arr) {
  let index = 1;
  let return_arr = []
  return_arr.push(arr[0])
  for(let i = 1; i < arr.length; i++) {
    if(arr[i][index] < return_arr[0][index]) {
      return_arr.unshift(arr[i])
    }
    if(arr[i][index] === return_arr[0][index]) {
      let temp = return_arr.shift();
      return_arr.unshift(arr[i])
      return_arr.unshift(temp)
    }
    if(arr[i][index] >= return_arr[return_arr.length-1][index]) {
      return_arr.push(arr[i])
    }
  }
  return return_arr;
}

let new_arr = sort(arr);
console.log(new_arr)