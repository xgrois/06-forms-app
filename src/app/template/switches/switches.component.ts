import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  person = {
    genre: '',
    notifications: false
  }

  terms: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
