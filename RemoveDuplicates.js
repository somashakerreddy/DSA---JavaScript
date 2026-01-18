
//Remove Duplicated From Sorrted Array

function removeDuplicates(nums){
    
    let pointerForUniqueElement = 0;
    for(let i = 0;i<nums.length;i++){
        
        
        if(nums[i] > nums[pointerForUniqueElement]){
            
             pointerForUniqueElement= pointerForUniqueElement+ 1;
             nums[pointerForUniqueElement] = nums[i]
            
        }
    }
    
    
    return pointerForUniqueElement+1;
}
let nums = [1,1,1,2,3,4,4,5,6,6]
let result = removeDuplicates(nums);
console.log(result)
