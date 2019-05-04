import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ratio } from '../../models/Company'
 
@Injectable({
  providedIn: 'root'
})
export class GetRatiosService {
  url = "http://localhost:3000/company/"
  constructor(private http: HttpClient) {
  }
  getRatio(code: number): Observable<Ratio[]> {
    return this.http.get<Ratio[]>(this.url+code)
  }
}
