


function hash(arr){
  let hash = {}
  
  
  for(let i = 0;i<arr.length;i++){
    hash[arr[i]] = (hash[arr[i]] || 0) + 1; //if number repeats incerase count; 0 and 1 
    
  }
  
  for(let i =0;i<arr.length;i++){
    if (hash[arr[i]] === 1){
    return arr[i]
    }
  }
}

let nums = [1, 1, 1, 2, 3, 3, 4, 4];
let re = hash(nums);
console.log(re); // 2
//Output ==> 2
