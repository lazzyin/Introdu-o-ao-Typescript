/*let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz" 

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}*/

interface Person{
    nome: string;
    idade: number
    profissao:"Atriz"|"Padeiro"
}

const Maria: Person = {
    nome: "Maria",
    idade: 29,
    profissao:"Atriz"
}

const Roberto: Person = {
    nome: "Roberto",
    idade: 19,
    profissao:"Padeiro"
}

const Laura: Person={
    nome:"Laura",
    idade:32,
    profissao:"Atriz"
}

const Carlos: Person={
    nome:"Carlos",
    idade: 19,
    profissao:"Padeiro"
}