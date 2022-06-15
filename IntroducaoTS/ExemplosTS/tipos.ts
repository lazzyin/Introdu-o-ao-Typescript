type input = number | string;

function sumValores(input1: input, input2: input) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString()
    } else {
        return input1 + input2;
    }
}

console.log(sumValores(1,2))
console.log(sumValores("Hello"," friend"))
console.log(sumValores("1", 2))

