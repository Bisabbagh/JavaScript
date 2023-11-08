//7
/*function cube(c){
   return c*c*c;
}
console.log(cube(4));
*/
//8
/*function multiply(x,y){
    return x*y;
}
console.log(multiply(9,5))*/


//9

/*function canIGetADrivingLicense(age){
    if (age >=20){
        return "yes you can";
    }
    else
        return "please come back after 3 years to get one";
}
console.log(canIGetADrivingLicense(19));
*/


//10

/*var word11=prompt("ff");
var word2=prompt("s");
function sameLength(word11,word2){
    if(word11.length==word2.length){
        return true;
    }
    else{
    return false;}
}
console.log(sameLength(word11,word2));
*/


//11

/*function largerNubmer(x,y){
    if(x>y){
        return x;
    }
    else
    return y;
}
console.log(largerNubmer(5,6));
*/


//12

/*function smallerNubmer(x,y,z){
    if(x<y & x<z){
        return x;
    }
    if (z<x & z<y) {
        return z
    } else {
        return y
        
    }
    
}
console.log(smallerNubmer(5,3,3));
*/

//13

/*function shorterString(wr1,wr2,wr3,wr4,wr5){
    const strings = [wr1, wr2, wr3, wr4, wr5];
    let shortest = strings[0];

    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }

    return shortest;
}
console.log(shorterString("aaa","aaaaa","aa","a","aaaa"));*/


//14

/*function shorterString(wr1,wr2,wr3,wr4,wr5){
    const strings = [wr1, wr2, wr3, wr4, wr5];
    let shortest = strings[0];

    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > shortest.length) {
            shortest = strings[i];
        }
    }

    return shortest;
}
console.log(shorterString("aaa","aaaaa","aa","a","aaaa"));*/


//15
/*function iseven(x){
    if(x%2==0){
        return true;
    }
    else{
        return false
    }
}
console.log(iseven(3));*/


//16

/*function isOdd(x){
    if(x%2==0){
        return false;
    }
    else{
        return true
    }
}
console.log(isOdd(3));*/

//17

/*function positive(x){

    if(x<0){
        return x*-1
    }
    else{
        return x
    }
}
console.log(positive(0));*/

//18

/*function fullName(First,Last){
    return First+" "+Last
}
console.log("Baker","Sabbagh")*/


//19

/*function average(a,b,c,d,e){
    var sum=a+b+c+d+e;
    var avr=sum/5;
    return avr;
}
console.log(average(2,3,1,4,4));*/



//20

/*function randomNumber(){
    return Math.random();
}
console.log(randomNumber());*/


//21
/*function randomBetweenNumbers(x,y){
    return Math.random() *(x-y) +y;//with out y it wil b allways between 0-1
}
console.log(randomBetweenNumbers(5,4));*/

//22

/*var x=prompt("inter the mark you git")
function scoreInUniversty(x){
    
    if(x<50)
    {
        return"F";

    }
    else if(x>=50 & x<69){
        return "D";
    }
    else if(x>=70 & x<84){
        return"C";
    }
    else if(x>=85 & x<94){
        return"B";
    }
    
    
    else if(x>=95 & x<=100){
        return"A";
    }
    else{
        return"Wrong input";
    
    }
}
console.log(scoreInUniversty(x))*/


//23

/*function Counter() {
    let count = 0;
    return function () {
        return count ++;
    }
}

const counter = Counter();

console.log(counter()); 
console.log(counter()); 
console.log(counter()); */

//24

/*function createCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const counter = createCounter();
let previousCount = 0;

function resetCounter() {
    const currentCount = previousCount;
    previousCount = counter();
    return `${currentCount} and the counter reset now`;
}

// Example usage:
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 

console.log(resetCounter());

console.log(counter()); 
console.log(counter()); 
*/

