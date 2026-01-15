function Palindrome(x){
    let reversedNumber = 0
 let   Xcopy = x
if(x < 0){
    return false
}
while(x > 0){
    let reminder = x % 10;
    reversedNumber = (10*reversedNumber) + reminder
    x =Math.floor( x /10)

}
if(reversedNumber === Xcopy){
return true


}else{
    return false
}



}
let x = 121;
let result =Palindrome(x)
console.log(result)