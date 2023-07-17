function add(n1: number, n2: number, showResult: boolean, phrase: string){
    const result = n1 +n2;
    if(showResult){
        console.log(phrase + result);
    }else{
        return result;
    }
}
const number1 = 20;
const number2 = 30;
const printResult = true;
const resultPhrase = 'Result is : ';
add(number1, number2, printResult, resultPhrase);