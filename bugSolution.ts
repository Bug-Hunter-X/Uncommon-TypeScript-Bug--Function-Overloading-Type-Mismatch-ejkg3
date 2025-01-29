//Corrected implementation of function overloading to handle potential type mismatch errors
function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result: 8
result = subtract(result, 2); // result: 6
console.log(result); //Prints 6 to the console

//Correct usage of function overloading
function overloadedAdd(a: number, b: number): number; 
function overloadedAdd(a: string, b: string): string; 
function overloadedAdd(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else {
        throw new Error('Types must match');
    }
}

result = overloadedAdd(5,3); //Correct
result = overloadedAdd('hello','world');//Correct
//result = overloadedAdd(5,'hello'); //Throws an error at runtime