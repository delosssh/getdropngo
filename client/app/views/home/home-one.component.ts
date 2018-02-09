import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-one',
  template: `<app-header></app-header>
  <app-intro></app-intro>
  <app-portfolio></app-portfolio>
  <app-services [backgroundGray]="true"></app-services>
  <app-testimonials-carousel></app-testimonials-carousel>
  <app-cta></app-cta>
  <app-pricings></app-pricings>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeOneComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    
  }
  

}
