import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    genre: ['', Validators.required],
    notifications: [true, Validators.required],
    terms: [false, Validators.requiredTrue]
  });

  person = {
    genre: '',
    notifications: true
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset( {...this.person, terms: false} );

    // RxJs
    this.myForm.valueChanges.subscribe( form => {
      console.log('ngOnInit: ',form);
      delete form.terms;
      this.person = form;
    });
  }

  save() {
    const info = {...this.myForm.value};
    delete info.terms;
    this.person = info;
  }

}
