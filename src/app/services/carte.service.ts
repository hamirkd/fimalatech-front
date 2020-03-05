import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carte } from '../models/carte.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarteService {

  baseUrl = environment.backup_address + "carte";
  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id,httpOptions);
  }

  addOrUpdate(carte: Carte): Observable<any> {
    return this.http.post(this.baseUrl, carte,httpOptions);
  }

  updateCarte(carte: {id,numero,groupe_id}): Observable<any> {
    return this.http.put(this.baseUrl, carte,httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl,httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

}
