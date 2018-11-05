import { User } from '../login/user'
import { Router } from '@angular/router'
import { Component } from '@angular/core';
import { SignupService } from './signup.service';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()],
    providers: [SignupService]
})
export class SignupComponent {
    error = false;

    user: User = {
      id: '',
      username: '',
      email: '',
      password: '',
      token: ''
    }

    constructor(private router: Router, private loginService: SignupService) {}

    onSignUp() {
      this.error = false;
      return this.loginService.signup(this.user).subscribe((status)=>{
        return this.router.navigateByUrl('/login');
      }, (err)=>{
        this.error = true;
      })
    }

}
