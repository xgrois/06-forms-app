import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent implements OnInit {

  myForm = this.fb.group({
    product: ['', [Validators.required, Validators.minLength(3)] ],
    price: ['', [Validators.required, Validators.min(0)] ],
    stockUnits: ['', [Validators.required, Validators.min(0)] ]
  });

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
  }

  fieldIsValid(fieldName: string) {
    return this.myForm.controls[fieldName].errors && this.myForm.controls[fieldName].touched;
  }

  save() {
    console.log(this.myForm.value);
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    this.myForm.reset();
    
  }

}
