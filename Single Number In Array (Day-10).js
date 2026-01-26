function single_Number(arr){
  let hash = {} //Creates The Javascript object to Store Frequency(Multiple times ) of Nums;
  for(let i =0;i<arr.length;i++){
    if(!hash[arr[i]]){
      hash[arr[i]] = 1;
    }else{
      hash[arr[i]]++
    }
    
  }
  for(let i = 0;i<arr.length;i++){
    if(hash[arr[i]] ==1){
      
return arr[i]   }
  }
}
let arr = [1,2,3,1,2];
let re = single_Number(arr);
console.log(re);

//Pycode 

// def single_digit(arr):
//   hash = {}
//   for i in range(len(arr)):
//     if arr[i] not in hash:
//       hash[arr[i]] = 1;
//     else:
//       hash[arr[i]] += 1
//   for i in range(len(arr)):
//     if hash[arr[i]] == 1:
//       return arr[i];
// arr = [1,1,2,3,3]
// re = single_digit(arr)
// print(re)
    



