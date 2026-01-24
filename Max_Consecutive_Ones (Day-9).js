function max_Consecutive_ones(arr){
let current_count = 0;
let max_count = 0;
for(let i = 0; i < arr.length;i++){
  if(arr[i] == 1){
    current_count += 1;
  }else{
    max_count = Math.max(current_count,max_count)
    current_count = 0;
  }
}
  return max_count
}
let arr = [1,1,1,0,0,1]
let res = max_Consecutive_ones(arr)
console.log(res)    // => out put > 3 

 //Python code 
// def max_Consecutive_ones(arr):
//   current_count =0;
//   max_count = 0;
//   for i in range(len(arr)):
//     if arr[i] == 1:
      
//       current_count += 1;
//     else:
//       max_count = max(current_count,max_count)
//       current_count = 0;
//   return max_count;


// arr  = [0,1,1,1,0];
// res = max_Consecutive_ones(arr)
// print(res)
      
