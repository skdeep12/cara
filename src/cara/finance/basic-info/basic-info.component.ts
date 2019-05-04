import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  @Input() code: number;
  
  constructor() { }

  ngOnInit() {
  }

}
