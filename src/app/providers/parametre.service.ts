import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {
  
  baseUrl = environment.apiUrl;
  controller = 'parametre/';

  constructor(private http: HttpClient) { }

  getParametre(codeParametre: string) {
    debugger;
    return this.http.get<string>(this.baseUrl + this.controller +'getParametre/'+ codeParametre)[0];
  }

}
