import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  // @ts-ignore
  mainForm: FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.mainForm = this.formBuilder.group({
      fname: new FormControl(null, [Validators.required]),
      lname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required)
    })
  }


}
