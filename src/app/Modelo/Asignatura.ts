import { Estudiante } from "./Estudiante";

export class Asignatura {
    id!: number;
    nombre!:String;
    estudiantes!: Estudiante[];
    gradoSalon!:String;
    constructor(){} 
}