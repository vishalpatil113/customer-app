import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../usermodel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  users: User[];
  login: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.user = new User({});
    this.login = this.fb.group({
      email: [this.user.email],
      password: [this.user.email],
      rememberPassword: [this.user.rememberPassword]
    });
   
  }

  ngOnInit() {
    
   
  }

 
  onSubmit() {
    this.users = JSON.parse(localStorage.getItem('users'));
    this.users.filter(u => {
      if (u.email === this.login.value.email && u.password == this.login.value.password) {
        localStorage.setItem('currentUser', JSON.stringify(u));
        this.router.navigate(["/posts"]);
        return;

      }
      else {
        this.router.navigate(["register/login"]);
      }
    })
   
    
    
  }
}
