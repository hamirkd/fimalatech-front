import { Carte } from './carte.model';

export class Acces{
    id:number;
    carte:Carte;
    typeAcces:'ENTREE'|'SORTIE';
    createdAt:Date;
    updatedAt:Date;
}