import { Personnel } from './personnel.model';
import { Groupe } from './groupe.model';
import { Acces } from './acces.model';

export class Carte{
    id:number;
    numero:string;
    personnel:Personnel;
    groupe:Groupe;
    acces:Acces[];
    createdAt:Date;
    updatedAt:Date;
    groupe_id?:any;
}