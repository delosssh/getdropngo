import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pricings1',
  templateUrl: './pricings1.component.html',
  styleUrls: ['./pricings1.component.scss']
})
export class PricingsComponent1 implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  isAnnualSelected: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
