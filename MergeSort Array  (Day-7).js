//“Merge two sorted arrays into one sorted array in-place using two pointers starting from the end.”


function mergeSort(nums1,m,nums2,n){
let p1 = m - 1;
let p2 = n - 1;
  for(let i = m + n - 1;i>=0;i--){
if(p2 < 0){
  break;
}
if(p1 >= 0 && nums1[p1] > nums2[p2]){
  nums1[i] = nums1[p1];
  p1--
}else{
  nums1[i] = nums2[p2];
  p2--
}   
  }
return nums1;
}

let nums1 = [1,2,3,0,0,0]
let nums2 = [4,5,6]
let m = 3;
let n = 3
let res = mergeSort(nums1,m,nums2,n)
console.log(res)

// ==> output  == > 

// [1,2,3,4,5,6]




//python code
// def mergeSort(nums1,m,nums2,n):
//   p1 = m - 1;
//   p2 = n - 1;
  
//   for i in range(m + n - 1, -1, -1):
//     if p2 < 0:
//       break;
//     if(p1 >= 0 and nums1[p1] > nums2[p2]):
//       nums1[i] = nums1[p1]
//       p1 -= 1
//     else:
//       nums1[i] = nums2[p2];
//       p2 -= 1
//   return nums1;
  
// m = 3
// n = 3
// nums1 = [1,2,3,0,0,0]
// nums2 = [4,5,6]
// res=mergeSort(nums1,m,nums2,n)
// print(res)
  









