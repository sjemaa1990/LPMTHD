import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {
  
  baseUrl = environment.apiUrl;
  controller = 'parametre/';

  constructor(private http: HttpClient) { }

  getParametre(codeParametre: string): Observable<Object>{
    debugger;
    return this.http.get<Object>(this.baseUrl + this.controller + codeParametre);
  }

}
