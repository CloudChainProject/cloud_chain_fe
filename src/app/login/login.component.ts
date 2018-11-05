import { Component } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Router } from '@angular/router'

import { LoginService } from './login.service';
import { User } from './user'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()],
    providers: [LoginService]
})
export class LoginComponent {
    error = false;

    user: User = {
      id: '',
      username: '',
      email: '',
      password: '',
      token: ''
    }

    constructor(private router: Router, private loginService: LoginService) {}

    onLoggedin() {
      this.error = false;
      return this.loginService.getToken(this.user).subscribe((status)=>{
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('token', status['token']);
        return this.router.navigateByUrl('/admin');
      }, (err)=>{
        this.error = true;
      })
    }

}
