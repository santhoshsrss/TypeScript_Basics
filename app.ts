type combinable = number | string;

function combine(
    input1: combinable, 
    input2: combinable,  
    )
    
{
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        result = input1+input2;
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

const comAges = combine(30, 45)
console.log(comAges);

const comName = combine('Santhosh', ' Sakthivel')
console.log(comName.toUpperCase());

function mul(a1: number, a2: number) {
    return a1 * a2;
}

function printResult(num: number) {
   console.log('result: ' + num);
}
printResult(mul(5, 6));