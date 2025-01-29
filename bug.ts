function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result: 8
result = subtract(result, 2); // result: 6
console.log(result); //Prints 6 to the console

//Incorrect usage of function overloading
function overloadedAdd(a: number, b: number): number; 
function overloadedAdd(a: string, b: string): string; 
function overloadedAdd(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else {
        return null;
    }
}

result = overloadedAdd(5,3); //Correct
result = overloadedAdd('hello','world');//Correct
result = overloadedAdd(5,'hello'); //Incorrect, should throw an error