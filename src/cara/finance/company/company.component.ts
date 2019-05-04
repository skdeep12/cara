import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  @Input() code: number;
  constructor(private _activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this._activatedRoute.params
    .subscribe( params => {
      this.code = params['code'];
    });
  }

}
