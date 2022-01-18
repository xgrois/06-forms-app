import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  initialForm = {
    product: 'RTX 3050',
    price: 500,
    stockUnits: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log('Submit!', this.myForm);

    this.myForm.resetForm({
      price: 0,
      stockUnits: 0
    });
  }

  productNotValid(): boolean {
    console.log('Product name validation: ',this.myForm);
    return !this.myForm?.controls['product']?.valid 
        && this.myForm?.controls['product']?.touched;
  }

  priceNotValid(): boolean {
    console.log('Price validation: ',this.myForm);
    return this.myForm?.controls['price'].value < 0 && this.myForm?.controls['price']?.touched;
  }

}
