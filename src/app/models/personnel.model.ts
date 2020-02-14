import { Carte } from './carte.model';

export class Personnel{
    id:number;
    code:string;
    nom:string;
    prenom:string;
    adresse:string;
    telephone:string;
    carte_id:string;
    carte:Carte;
    createdAt:Date;
    updatedAt:Date;

}