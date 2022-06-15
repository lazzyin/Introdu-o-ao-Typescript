let anyVar: any;
anyVar = 3
anyVar="teste"

let stringTest:string="Verified"
stringTest = anyVar;

let unknownVar: unknown
unknownVar = 3;
unknownVar = "test"
unknownVar: true
unknownVar="Unkown"

let stringTest2: string = "teste2"
//stringTest2 = unknownVar; //O tipo 'unknown' não pode ser atribuído ao tipo 'string'.

if (typeof unknownVar === 'string') {
    stringTest2 = unknownVar;
}