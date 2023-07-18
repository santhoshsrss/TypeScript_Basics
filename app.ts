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

//* Function Type
let fun: (x: number, y: number) => number;
fun = mul;
console.log(fun(3, 9))

//* FUNCTION TYPE AND CALLBACK

function addHandle(m1: number, m2: number, cb: (num: number) => void){
    const handleResult = m1 + m2;
    cb(handleResult)
}

addHandle(10, 20, (handleResult) => {
    console.log(handleResult);
})


//* unknown type

let userInput: unknown;
let userName: unknown;

userInput = 6;
userName = 'santhosh';

//* NEVER TYPE

function handleError(message: string, code: number): never{
    throw{message: message, errorCode: code};
}
handleError('Error in the Page', 600)