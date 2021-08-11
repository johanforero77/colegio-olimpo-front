import { Asignatura } from "./Asignatura";

export class Profesor {
    id!: number;
    nombre!:String;
    asignaturas!: Asignatura[];
    constructor(){} 
}