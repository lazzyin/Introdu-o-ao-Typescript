import $ from 'jquery';
import {exp} from "./export"

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao')
    }
});

$('body').novaFuncao();
console.log(exp)
//==========================================================================

console.log("Hello friend")

//==========================================================================

function soma(a:number, b:number){
    return a + b;
}

//==========================================================================

//interfaces

interface IAnimal{
    nome: string;
    tipo: 'terreste' | 'Aquatico';
    domestico: boolean;//executarRugido(volumeDCB:number): void;
    
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
 porte:'pequeno'|'medio'|'grande'
}

const animal: IDomestico = {
    nome: 'Cachorro',
    tipo: 'terreste',
    domestico: true,
    porte: 'medio'//executarRugido:(volumeDCB)=>(`{volumeDCB}dB`)
    
}
const felino: IDomestico = {
    nome: "Leão",
    tipo: 'terreste',
    visaoNoturna: true,
    domestico:false
//executarRugido:(volumeDCB)=>(`{volumeDCB}dB`)
    
}

//types

type IDomestico = IFelino | ICanino;

//==========================================================================

//USANDO TAG INPUT

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value)
});

//==========================================================================

//GENERIC TYPES

function addApendiceLista<NaoSei>(array:any[], valor:NaoSei){
    return array.map(item => item + valor);
}

addApendiceLista([1, 2, 3], 1);

//==========================================================================

//CONDICIONAIS

interface IUser{
    id: string;
    email: string;
}

interface IAdmin extends IUser{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecionar(user:IUser|IAdmin) {
    if ('cargo' in user) {
        //Redirecionar para a area de administração
    }
    //Redirecionar para a area do usuario
}

//==========================================================================

//VARIAVEIS OPCIONAIS

interface IUsuario{
    id: string;
    email: string;
    cargo?: 'funcionario'|'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(user: IUsuario) {
    if (user.cargo) {
        //redirecionar(user.cargo);
    }

    //redirecionar para a area do usuario
}

//==========================================================================

//READONLY E PRIVATE

interface Cachorro{
     nome: string;
     idade: number;
     parqueFavorito?: string;
}

type CachorroReadOnly = {
    readonly[K in keyof Cachorro]:Cachorro[K]
}

class MeuCachorro implements CachorroReadOnly{
    idade;
    nome;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Loki', 3);


//==========================================================================

//OMIT

interface Person{
    nome: string;
    idade: number;
    nacionalidade: string;
}
interface Brazilian extends Omit<Person, 'nacionalidade'>{

}

const brasileiro: Brazilian={
    nome: 'John',
    idade:21
}
