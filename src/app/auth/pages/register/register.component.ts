import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(this.validatorService.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.cannotBe]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirmed: ['', [Validators.required]]
  },
  {
    validators: [this.validatorService.equalFields('password','passwordConfirmed')]
  });
  
  emailErrorMsg: string = 'Email error';

  get emailErrorMessage(): string {

    const err = this.myForm.get('email')?.errors;

    if ( err!['required'] ) {
      return 'Email is required';
    } else if ( err!['emailExists'] ) {
      return 'Email already exists';
    } else if ( err!['pattern'] ) {
      return 'Email format invalid';
    }

    return '';

  }

  constructor(private fb: FormBuilder,
              private validatorService: ValidatorService,
              private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
  }

  hasErrors(controlName: string) {

    return this.myForm.controls[controlName].errors !== null 
        && this.myForm.controls[controlName].touched;
  }



  onSubmitForm() {

    const info = (this.myForm.invalid) ? 'Form is invalid' : 'Form is valid';
    console.log('onSubmitForm: ', info);

    this.myForm.markAllAsTouched();
  }

}
