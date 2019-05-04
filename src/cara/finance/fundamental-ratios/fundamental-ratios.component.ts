import { Component, OnInit, Input } from '@angular/core';
import { GetRatiosService } from '../services/get-ratios/get-ratios.service'
import { Ratio } from '../models/Company'

@Component({
  selector: 'fundamental-ratios',
  templateUrl: './fundamental-ratios.component.html',
  styleUrls: ['./fundamental-ratios.component.css'], 
  //providers: [ GetRatiosService ]
})

export class FundamentalRatiosComponent implements OnInit {
  ratios: Ratio[];
  @Input() code: number;
  constructor(private ratioService: GetRatiosService) { }

  ngOnInit() {
    this.getRatio(this.code)
  }
  getRatio(code: number): void {
    this.ratioService.getRatio(code)
    .subscribe(ratios => {
      this.ratios = ratios;
    })
  }
}
