function ReverseInteger(x){ //function to reverse an integer number

let reversedNumber = 0; // to store the reversed number
Xcopy  = x // to check if the number is negative or positive
x = Math.abs(x);        //

while(x > 0){ // loop until all digits are processed

let remainder = x % 10; //
reversedNumber = (10*reversedNumber)+ remainder; // update the reversed number
x = Math.floor(x /10); // remove the last digit from the original number


}
if(Xcopy < 0){ // check if the original number was negative

    return -reversedNumber; // return the negative of the reversed number
}
return reversedNumber // return the reversed number
}
let x = -13124 // input number to be reversed
let result = ReverseInteger(x); // call the function and store the result
console.log(result); // print the reversed number
