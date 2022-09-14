import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  credentials: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterForm();
    this.credentials.valueChanges.subscribe({ next: (value) => console.log(value) });
  }

  createRegisterForm() {
    this.credentials = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      userName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(9)]],
      firstName: ["", [Validators.required]],
      secondName: [""],
      lastName: ["", [Validators.required]]
    });
  }

  register() {

  }

}
