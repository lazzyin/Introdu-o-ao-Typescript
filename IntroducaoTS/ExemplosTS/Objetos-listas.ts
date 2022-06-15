

let pessoa:(nome: string, idade: number, profissao: string)=>{
    nome: "Nome";
    idade: 20;
    profissao:Profissao.Musico;
}

enum Profissao{
    Professora,
    Musico,
    Dev
}

interface Pessoa{
    nome: string,
    idade: number,
    profissao?:Profissao// essa interrogação torna o atributo "não prioritario", podendo ou não ser declarado
}

interface Student extends Pessoa{
    meterias:string[]
}

const Person = {
    nome: "John",
    idade: 21,
    profissoo:Profissao.Dev,
}

const Bruna: Pessoa = {
    nome: "Bruna",
    idade: 25,
    profissao:Profissao.Professora
}

const Jessica: Student={
    nome:"Jessica",
    idade:18,
    //profissao: Profissao.Dev,
    meterias:["Matematica","Logica","JavaScript"]
}

function listar(lista:string[]){
    for(const item of lista){
        console.log("- ", item);
    }
}

listar(Jessica.meterias);