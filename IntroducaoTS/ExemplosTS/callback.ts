function SumValues(num1: number, num2: number, callback: (num: number) => number): number{
   let resul = num1 + num2;
    return callback(resul)
}

function aoQuad(num: number): number{
    return num * num;
}
function DivEleMesmo(num: number): number{
    return num / num;
}

console.log(SumValues(1, 3, aoQuad));
console.log(SumValues(1, 3, DivEleMesmo));