import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../usermodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  users: User[];
  register: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.user = new User({});
    this.register = this.fb.group({
      name: [this.user.name],
      email: [this.user.email],
      password: [this.user.password],
      confromedPassword: [this.user.confromedPassword],
      tandc: [this.user.tandc]
    });

  }

  ngOnInit() {
    this.users = new Array();

  }


  onSubmit() {
    // TODO: Use EventEmitter with form value   
    this.users.push(this.register.value);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.router.navigate(["/login"]);
  }
}

