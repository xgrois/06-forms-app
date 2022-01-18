import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent implements OnInit {

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)] ],
    favorites: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['FIFA 2020', Validators.required]
    ], Validators.required )
  });

  newFavorite: FormControl = this.fb.control('', Validators.required );

  get favoritesArr() {
    return this.myForm.get('favorites') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

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

  addNewFavorite() {
    if (this.newFavorite.invalid) return;
    
    this.favoritesArr.push( this.fb.control(this.newFavorite.value, Validators.required ));

    this.newFavorite.reset();
  }

  deleteFavorite(i: number) {
    this.favoritesArr.removeAt(i);
  }

}
