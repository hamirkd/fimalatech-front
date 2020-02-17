import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Groupe } from '../models/groupe.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GroupeService {

  baseUrl = environment.backup_address + "groupe";
  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id,httpOptions);
  }

  addOrUpdate(groupe: Groupe): Observable<any> {
    return this.http.post(this.baseUrl, groupe,httpOptions);
  }

  addDroit(groupe: Groupe): Observable<any> {
    return this.http.post(this.baseUrl+"/addDroit", groupe,httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl,httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

}
