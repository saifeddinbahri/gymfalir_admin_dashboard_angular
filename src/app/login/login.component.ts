import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private loginService: LoginService, 
    private router: Router
  ){}
   user = {
    username: '',
    password: ''
  };

  sumbit() {
    this.loginService.login(this.user.username, this.user.password).subscribe(
      {
        next: response => {
          if(!!response.token) {
            localStorage.setItem('token', response.token)
            
          }
        },
        error: error => {
          console.log(error)
        }
      }
    )
  }

}
