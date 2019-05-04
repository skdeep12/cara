import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FundamentalRatiosComponent } from './fundamental-ratios.component';
import { GetRatiosService } from '../services/get-ratios/get-ratios.service'
describe('FundamentalRatiosComponent', () => {
  let component: FundamentalRatiosComponent;
  let fixture: ComponentFixture<FundamentalRatiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundamentalRatiosComponent ],
      providers: [ HttpClientModule,GetRatiosService, HttpClient ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundamentalRatiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
