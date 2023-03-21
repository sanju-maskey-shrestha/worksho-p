//Write a function that takes the base and height of a triangle and return its area.
function triArea(b,h){
    return (b*h)/2;
}
console.log(triArea(7,4));


//Write a function that returns the string "something" joined with a space " " and the given argument a.
function smth(c){
    return `something ${c}`;
}
console.log(smth("is better than nothing."))


//You are counting points for a basketball game, given the amount of 2-pointers scored and
//3-pointers scored, find the final points for the team and return that value.

let new1 = (x,y) => {
    return 2*x+3*y;
}
console.log(new1(7,5));


//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
function check(b,a){
    if ((b+a)<100){
        return true;
    } else {
        return false;
    }
}
console.log(check(99,0));


//Create a function that takes a number as an argument. Add up all the numbers from 1 to
//the number you passed to the function. For example, if the input is 4 then your function
//should return 10 because 1 + 2 + 3 + 4 = 10.
function addup(x){
    if (x>=1000){
        sum=0;
        for (i=1;i<=x;i++){
            sum=sum+i;
        }
        return sum;
    }else{
       return "Invalid number.";
    }
}
console.log(addup(600));


//Create a function that determines whether a number is Oddish or Evenish. A number is
//Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its
//digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
//For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 =
//4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.
function odev(i){
    sum=0;
    while (i>0){
        x=i%10;
        i=Math.trunc(i/10);
        sum=sum+x;
    }
    if (sum%2==0){
        return "Evenish";
    }else{
        return "Oddish";
    }
}
console.log(odev(121));

// Any Prime Number in Range
// Create a function that returns true if there's at least one prime number in the given
// range (n1 to n2 (inclusive)), false otherwise.
// Examples
// primeInRange(10, 15) ➞ true
// // Prime numbers in range: 11, 13
// primeInRange(62, 66) ➞ false
// // No prime numbers in range.
// primeInRange(3, 5) ➞ true
// // Prime numbers in range: 3, 5
// Notes
// ● n2 is always greater than n1.
// ● n1 and n2 are always positive.
// ● 0 and 1 aren't prime numbers.

function prime(c){
    response=true;
    for (i=2;i<c;i++){
        if (c%i==0){
            response=false;
            break;
        }
    }
    return response;
}

function main(a,b){
    if (b>a && x>=0 && b>=0){
        count=0;
        while (a<=b){
            if (prime(a)==true && a!=0 && a!=1 ){
                count=count+1;
            }
            a=a+1;
        }
    }
    if (count>0){
        return true;
    } else {
        return false;
    }
}
console.log(main(62,66));


// Left Shift by Powers of Two
// The left shift operation is similar to multiplication by powers oftwo.
// Sample calculation using the left shift operator (<<):
// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20
// Write a function that mimics (withoutthe use of <<)the left shift operator and returns
// the resultfrom the two given integers.
// Examples
// shiftToLeft(5, 2) ➞ 20
// shiftToLeft(10, 3) ➞ 80
// shiftToLeft(-32, 2) ➞ -128
// shiftToLeft(-6, 5) ➞ -192
// shiftToLeft(12, 4) ➞ 192
// shiftToLeft(46, 6) ➞ 2944
// Notes
// ● There will be no negative values for the second parameter y.
// ● This challenge is more like recreating the left shift operation,thus,the use ofthe
// operator directly is prohibited.
// ● Alternatively, you can solve this challenge via recursion.

function shift(x,y){
    if (y>=0){
        return (x* (2**y));
    }else{
        return "Negative number found."
    }
}
console.log(shift(46,6));


// Convert a Number to Base-2
// Create a function that returns a base-2 (binary) representation of a base-10 (decimal)
// string number. To convertis simple: ((2) means base-2 and (10) means base-10)
// 010101001(2) = 1 + 8 + 32 + 128.
// Going from rightto left,the value ofthe most right bitis 1, now from that every bitto the
// left will be x2. The values of an 8 bit binary number are (256, 128, 64, 32, 16, 8, 4, 2, 1).
// Examples
// binary(1) ➞ "1"
// // 1*1 = 1
// binary(5) ➞ "101"
// // 1*1 + 1*4 = 5
// binary(10) ➞ "1010"
// // 1*2 + 1*8 = 10
// Notes
// ● Numbers will always be below 1024 (notincluding 1024).
// ● The && operator could be useful.
// ● The strings will always go to the length at which the mostleft bit's value gets
// bigger than the number in decimal.
// ● If a binary conversion for 0 is attempted, return "0".

function bin(i){
    x=""
    if (i>0 && i<1024){
        while (i>0){
            z=i%2;
            x=z+x;
            i=Math.trunc(i/2);
        }
    }else if(i==0){
        x=x+0;
    }else{
        x="Number more than 1024 is not accepted."
    }
    return x; 
}
console.log(bin(10));