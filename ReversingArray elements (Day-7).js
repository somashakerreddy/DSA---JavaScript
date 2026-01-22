//leetcode 344 Problem Reverse String
function reverseArray(arr){
  let length = arr.length; // length of array
  let halflength = Math.floor(length/2); //dividing array into binary parts for swaping
  for(let i = 0;i<halflength;i++){
    let temp = arr[i]; //stroing temporary for from intial elemets(left side)
    arr[i] = arr[length-i-1]; //swapping left side (firat half elements ) with right side (last) 
    arr[length-i-1] = temp; //swapping last element(right side) with first (left side)
    
  }
  return arr;
}
let arr = ["a","b","c","d"];
let result = reverseArray(arr);
console.log(result)
