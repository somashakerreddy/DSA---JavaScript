function Palindrome(x){   // x is A Number
    let reversedNumber = 0 //Assuming Intially the Number can be '0'
 let   Xcopy = x   //Stores Copy of X  (Optional)
if(x < 0){      //Case 1: if Number is Lessthen 0 it can't be Palindrome  
    return false // returning False
}
while(x > 0){  // Check until "0"
    let reminder = x % 10;  //     Getting remainder and Stroing by Moduls(%)
    reversedNumber = (10*reversedNumber) + reminder  //Reverseing and Removig last Digit from a Number
    x =Math.floor( x /10)   //Dividing with and Removing of Decimal Values

}
if(reversedNumber === Xcopy){  // Palindrome Checks of Equla returns True
return true


}else{
    return false  // else Return False
}



}
let x = 121;
let result =Palindrome(x)

console.log(result)
