
function reverseStringarray(arry) {
  
  let length = arry.length
  let halflength = Math.floor(length/2)
  for(let i = 0; i< halflength;i++){
    let temp = arry[i];
    arry[i] = arry[length-i-1];
    arry[length-i-1] = temp;
    
    
  }
  
  return arry
}
let arry = ["a","b","c","d"]
let re = reverseStringarray(arry)
console.log(re)
