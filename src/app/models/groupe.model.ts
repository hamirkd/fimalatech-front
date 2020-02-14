import { Droit } from './droit.model';

export class Groupe{
    id:number;
    nom:string;
    droits:Droit[];
    createdAt:Date;
    updatedAt:Date;
}