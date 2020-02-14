import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personnel } from '../models/personnel.model';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonnelService {

  baseUrl = environment.backup_address + "personnel";
  constructor(private http: HttpClient) { }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/" + id,httpOptions);
  }

  addOrUpdate(personnel: Personnel): Observable<any> {
    return this.http.post(this.baseUrl, personnel,httpOptions);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl,httpOptions);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/" + id);
  }


}
