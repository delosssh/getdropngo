import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-home-two',
  template: `<app-header></app-header>
  <app-intro-two></app-intro-two>
  <app-locations-carousel></app-locations-carousel>
  <app-pricings></app-pricings>
  <app-portfolio-carousel></app-portfolio-carousel>
  <app-testimonials [backgroundGray]="true"></app-testimonials>
  <app-services-carousel></app-services-carousel>
  <app-cta></app-cta>
  <app-contact [backgroundGray]="true"></app-contact>
  <app-footer></app-footer>`
})
export class HomeTwoComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
