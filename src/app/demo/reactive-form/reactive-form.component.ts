import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { compareValidator } from '../../shared/compare-validator.directive';
import { UserService } from '../../shared/user.service';
import { uniqueEmailValidator } from '../../shared/unique-email-validator.directive';
import { uniqueUsernameValidator } from '../../shared/unique-username-validator.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.createForm();
  }

  // use FormBuilder
  createForm() {
    // this.reactiveForm = new FormGroup({
    //   email: new FormControl('', Validators.required),
    //   emailConfirm: new FormControl('', [Validators.required, compareValidator('email')]),
    //   password: new FormControl('', Validators.required),
    //   passwordConfirm: new FormControl('', [Validators.required, compareValidator('password')]),
    // });

    this.reactiveForm = this.fb.group({
      username: ['',
        null,
        uniqueUsernameValidator(this.userService) // async validator
      ],
      email: ['',
        Validators.required, // sync validator
        uniqueEmailValidator(this.userService) // async validator
      ],
      emailConfirm: ['',
        [Validators.required, compareValidator('email')], // sync validator
        uniqueEmailValidator(this.userService) // async validator
      ],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, compareValidator('password')]],
    });
  }

  get username() {
    return this.reactiveForm.get('username');
  }
  get email() {
    return this.reactiveForm.get('email');
  }
  get emailConfirm() {
    return this.reactiveForm.get('emailConfirm');
  }
  get password() {
    return this.reactiveForm.get('password');
  }
  get pwConfirm() {
    return this.reactiveForm.get('passwordConfirm');
  }
}
