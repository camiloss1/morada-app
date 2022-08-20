import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/domain/models/User/user';
import { UserResgistered } from 'src/app/domain/models/User/userregistered';
import { UserUseCase } from 'src/app/domain/usecase/userusecase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  response: any;
  user!: UserResgistered;
  constructor(private _userUseCase: UserUseCase, private formBuilder: FormBuilder,) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['',
        [
          Validators.required,
        ]
      ],
      documentType: ['',
        [
          Validators.required,
        ]
      ],
      document: ['',
        [
          Validators.required,
        ]
      ],
      phone: ['',
        [
          Validators.required,
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email,
          Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    })
  }
  register() {
    var user: User = {
      email : this.signupForm.controls['email'].value,
      password : this.signupForm.controls['password'].value,
      name: this.signupForm.controls['name'].value,
      documentType: this.signupForm.controls['documentType'].value,
      document: this.signupForm.controls['document'].value,
      phone: this.signupForm.controls['phone'].value,
      role: 1
    }
  }
}
