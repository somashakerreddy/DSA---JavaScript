function missing_Num(arr){
  let n = arr.length + 1; // array starts from 0 ;   if array  starts from 1 it can be (arr.length)
  total_sum = n * (n + 1 ) / 2;
  let array_sum = 0;
  for(let i =0;i<arr.length;i++){
    array_sum += arr[i];
    
    
  }
  return total_sum - array_sum;
}

let arr = [1,3,4,5,6]
let result = missing_Num(arr)
console.log(result)  // ==> O/p    2 

//Python code
// def missingNumber(arr):
//   n = len(arr) + 1
//   total_Sum = n * (n + 1) // 2;
//   array_Sum = 0
//   for i in range(len(arr)):
//     array_Sum += arr[i];
//   return total_Sum - array_Sum;


// arr = [1,3,4,5]
// res = missingNumber(arr)
// print(res)
    
    



