    // The Program is  to Count Digits in a Number

    function countDigits(n){
       

let count = 0;
  n = Math.abs(n);
if(n == 0){
    return 1
}
while(n>0){
n = Math.floor(n / 10);
count++

}
return count;

    }
    
let result = countDigits(14124)
console.log(result);

//Output: 5

//Alternate Program

//Corner Case:
//Modern JavaScript
function num(n){
    n = Math.abs(n).toString(); //Converts into String
    
    
    return n.length; //Return's Length of That String --> n
}
let n = -0000034021039 //Avoid Zero's  
result = num(n)
console.log(result)



