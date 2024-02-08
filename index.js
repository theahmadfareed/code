console.log("Data Structures!");


// static (fixed in size)
const arr1 = [1, 1.5, 123e5, 123e-5, "A", Symbol("Ali"), true, null, undefined, function hello(){console.log("Function")}, {name: "Ali", age: 35}];

// dynamic (increase size based on need)
const array = [];
for(let i=0; i<5; i++){
    array[i] = i;
}

const arr2 = new Array(1, 1.5, 123e5, 123e-5, "A", Symbol("Ali"), true, null, undefined, function hello(){console.log("Function")}, {name: "Ali", age: 35})



// Methods (push, pop, unshift, splice)



const arr3 = "1221";
function isP(str){
    if(str === str.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}
console.log(isP(arr3));