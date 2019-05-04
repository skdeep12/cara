import { Component, OnInit } from '@angular/core';
import { GetCompaniesService } from '../services/get-companies/get-companies.service'
import { Company } from '../models/Company'

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit {
  companies: Company[];
  constructor(private getc: GetCompaniesService) { }

  ngOnInit() {
    this.getCompanies();
  }

  getCompanies(): void {
    this.getc.getCompanies()
    .subscribe(companies => {
      companies.forEach(company => {
        if(company.description === '') {
          company.description = 'derived';
        }
      });
      this.companies = companies;
    });
  }

}
