let button=document.getElementById('button')
let input=document.getElementById('input') as HTMLInputElement
let input2=document.getElementById('input2') as HTMLInputElement

function sum(num1: number, num2: number, printar: boolean, frase: string) {
    let resul=num1+num2
    if (printar) {
       console.log(frase+resul)
    }
    return num1+num2
}

let printar = true;
let frase="O valor é: "

if (button) {
    button.addEventListener('click', () => {
        if (input && input2) {
         (sum(Number(input.value),Number(input2.value),printar,frase))   
        }
        
    })
}