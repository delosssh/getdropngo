import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule, MatFormField, MatDatepicker } from '@angular/material';

@Component({
  selector: 'app-intro-two',
  templateUrl: './intro-two.component.html',
  styleUrls: ['./intro-two.component.scss']
})
export class IntroTwoComponent implements OnInit {

  @ViewChild(MatDatepicker) picker: MatDatepicker<Date>;
  
  searchForm: FormGroup;
  formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
