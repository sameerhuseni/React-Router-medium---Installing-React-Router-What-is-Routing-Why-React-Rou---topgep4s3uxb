import React from "react";
import { useSearchParams } from "react-router-dom";


export const Calculator = () => {
    const [params] = useSearchParams();
    console.log(params.get('op'))
    const fisrtNum = params.get('num1');
    const secondNum = params.get('num2')
    let ans = 0;
    if (params.get('op') === '+')
        ans = parseInt(fisrtNum) + parseInt(secondNum);
    else if (params.get('op') === '/')
        ans = fisrtNum / secondNum
    else if (params.get('op') === '%')
        ans = fisrtNum % secondNum
    else if (params.get('op') === '*')
        ans = fisrtNum * secondNum
    else if (params.get('op') === '-')
        ans = fisrtNum - secondNum

    return (
        <div>Your calculation Result is <span id="calc-result">{ans}</span></div>
    )
}
