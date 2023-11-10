/*
1
Correct the syntax error
 [ 1,7 , 9 , 45, ]

["Str" , "alex","moh",
'the','fox', 'over' ,'lazy', 'dog',  ]

*///done


//2

/*var fruits=["Tomato","Banana","Watermelon"]
console.log(fruits.indexOf("Banana"))
console.log(fruits.indexOf("Tomato"))
*/


//3
/*
var fruits=["Banana","Strobary "," Apricot"," Ajas"," Orange"];
var Sport=["GYM","Football "," Vallyball"];
var Movie=["God Father","silnce voice"," Interstllerer"];
console.log(Movie);
*/

//4
/*
var x=[]
function firstOfArray(x){
    return x[0]

}
//console.log(firstOfArray([1,4,5])); 
console.log(firstOfArray(["t","u","g","x"]));
*/


//5 

/*var x=[]
function firstOfArray(x){
   var c=x.length -1

    return x[c]

}
console.log(firstOfArray([1,4,5,4])); //have some err
console.log(firstOfArray(["t","u","g","x"]));
*/

//var Movie=["God Father","silnce voice"," Interstllerer"];
//console.log(Movie[-1]);

//6

/*
var array = [0,5,7,9]
//array.pop()//delete last
array.shift()
array.shift()
array.shift()
array.unshift(1,3,4,6,8)
array.push(10)//push last

console.log(array)*/


//7


/*Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*///done


//8 have some error
/*varx=[]
function middleOfArray(x){
if (length.x %2 !=0){

    return x[length.x / 2];

}
}*/
//8
/*function middleOfArray(arr) {
    const length = arr.length;

    if (length === 0) {
        // Handle empty array case
        return undefined;
    }

    const middleIndex = Math.floor(length / 2);

    if (length % 2 === 1) {
        // Odd number of elements
        return arr[middleIndex];
    } else {
        // Even number of elements
        return [arr[middleIndex - 1], arr[middleIndex]];
    }
}

console.log(middleOfArray([1, 4, 5])); // Output: 4
console.log(middleOfArray(["t", "u", "g", "x"]));*/

//9 
/*var animals=[]
animals[0]='cat';
animals[1]='ele';
animals[2]='zebra';
animals[3]='elephant';
var nams=[1,2,3,8,9];
nams[0]=5;
nams[1]=-22;
nams[2]=3.2;
nams[3]=44;
nams[4]=98;
nams[5]=44;
console.log(animals)
console.log(nams)*/


//10 have some errors
/*var x=[]
function indexOfArray(x){
    var f= indexOf

    return x
}
const c=indexOfArray([1,2,3,4,5,6])
console.log(indexOfArray([1,2,3,4,5,6]))
///////
function indexOfArray(arr, index) {
    if (index >= 0 && index < arr.length) {
        return arr[index];
    } else {
        // Handle invalid index
        return undefined;
    }
}


var nums = [1, 2, 3, 8, 9];
console.log(indexOfArray(nums, 3)); 
console.log(indexOfArray(nums, 1)); 
console.log(indexOfArray(nums, 4));
*/




//11


/*function arrayExceptLast(arr) {
    return arr.slice(0, -1);
}

var nums = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums));*/ 

//12

/*function addToEnd(arr, value) {
    return [...arr, value]; //... used for  create a new array that includes all elements from the original array (arr) and the new value
}

var nums = [1, 2, 3, 8, 9];
console.log(addToEnd(nums, 55));*/

//13

/*function sumArray(x){
var sum=0;
for (var i=0; i<x.length ;i++){

    
   
    sum=x[i] +sum
    console.log(sum)

}
return sum;
}
console.log(sumArray([1,2,3,8,9]))*/


//13.2
/*function sumArray(x){
    var sum=0;
var i=0;
while( i<x.length){

    
    
    sum=x[i] +sum
    //console.log(sum)
    i++
}
return sum;
}

console.log(sumArray([1,2,3,8,9]))
*/


//14

/*function minInArray(x){
    var min=x[0];
    for(var i =1; i<x.length;i++){

        if (x[i]<min){
            min=x[i];
        }
        
    }
    return min;
}
console.log(minInArray([5,-2,0,1,2]))*/

//14.2

/*function minInArray(x){
    var min=x[0];
    var i=1;
    while(i<x.length){
        if (x[i]<min){
            min=x[i]
        }
        i++
    }
    return min;

}
console.log(minInArray([5,-2,0,1,2]))*/






//17

/*function aveArray(x){
    sum=0;
    avr=0;
    for(var i=0; i<x.length;i++){

        sum=sum+x[i];
        avr=sum/x.length;
    }
    return avr;
}
console.log(aveArray([1,2,3,8,9]))*/


//17.2




//18
/*function shorterInArray(x){
    var min=x[0];
    for(var i=0; i<x.length;i++){
        if(x.length<min.length){
            min=x[i];

        }
    }
    return min;

}
console.log(shorterInArray(["alex","mercer","madrasa","rashed2","emad","hala"]))
*/

//19


/*function repeatChar(string,char){
    number=0;
    for(var i=0; i<string.length;i++){
        if(string[i]==char){
            number++

        }
    }
    return number;
}
console.log(repeatChar("alex mercer madrasa rashed2 emad hala","x"));*/


//20

/*function evenIndexOddLength(x) {
    const result = [];

    for (let i = 0; i < x.length; i += 2) {
        if (x[i].length % 2 !== 0) {
            result.push(x[i]);
        }
    }

    return result;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
console.log(evenIndexOddLength(strings));*/

//21

/*function powerElementIndex(x){

    arr=[];
    for (var i=0; i<x.length;i++){
   
   arr.push(x[i]*x[i]);
}
    return arr;

}
console.log(powerElementIndex([44, 5, 4, 3, 2, 10]));*/

//22
/*function evenNumberEvenIndex(x){
    var even=[];
    for(var i=0; i<x.length;i+=2){
        if(x[i]%2==0){
            even.push(x[i]);
        }
    }
    return even;
}
console.log(evenNumberEvenIndex([5,2,2,1,8,66,55,77,34,9,55,1]));
*/


