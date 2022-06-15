let valorAny: any;//Any aceita qualquer tipo

valorAny= 3;
valorAny= "teste";

let valorSting:string="teste"
//valorString=3 /. retorna: Não é possível localizar o nome 'valorString'. Você quis dizer 'valorSting'?

let valorString2:string="string2"
valorString2 = valorAny;
function sumString(string1: string, string2: string) {
    console.log(string1 + string2);
}
sumString(valorSting, valorString2);
sumString('Hello', ' Friend');