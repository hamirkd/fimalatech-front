import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Droit } from '../models/droit.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DroitService {

  baseUrl = environment.backup_address + "droit";
  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id,httpOptions);
  }

  addOrUpdate(droit: Droit): Observable<any> {
    return this.http.post(this.baseUrl, droit,httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl,httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }

}
