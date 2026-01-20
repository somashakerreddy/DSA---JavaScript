function RemoveElement(arr,value){
    let x = 0; //X will be the Pointer from strating index position
    for(let i =0;i<arr.length;i++){
        if(arr[i] !== value){
            arr[x] = arr[i];
            x = x + 1
        }
    }
    return x;
}
let arr = [3,2,2,3,4,5,3,6];
let value = 2;
let result = RemoveElement(arr,value);
console.log(result);