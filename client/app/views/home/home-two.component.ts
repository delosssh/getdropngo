import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-two',
  template: `<app-header></app-header>
  <app-intro-two></app-intro-two>
  <app-portfolio-carousel></app-portfolio-carousel>
  <app-testimonials [backgroundGray]="true"></app-testimonials>
  <app-services-carousel></app-services-carousel>
  <app-cta></app-cta>
  <app-pricings></app-pricings>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeTwoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
