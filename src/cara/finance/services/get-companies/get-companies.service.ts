import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from 'src/cara/finance/models/Company';

@Injectable({
  providedIn: 'root'
})
export class GetCompaniesService {
  private getURL = 'http://localhost:3000/_/companies'
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(this.getURL);
  }
}
