function SumOfTwoNo(num1,num2){
    let sum=num1+num2
    // console.log(sum);
    return sum;
}
// SumOfTwoNo(2,3)
// let result=SumOfTwoNo(2,3)
let finalResult=SumOfTwoNo(SumOfTwoNo(2,3),4)
console.log(finalResult); 
// 2,3,4