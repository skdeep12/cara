import { TestBed } from '@angular/core/testing';

import { GetCompaniesService } from './get-companies.service';
import { Company } from 'src/cara/finance/models/Company';

describe('GetCompaniesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCompaniesService = TestBed.get(GetCompaniesService);
    expect(service).toBeTruthy();
  });

  it('should fetch company list', () => {
    let companies: Company[];
    companies = TestBed.get(GetCompaniesService).getCompanies()
    console.log(companies)
  });
});
