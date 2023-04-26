import { Component,OnInit  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  template: `<div class="form_wrapper">
  <div class="form_container">
      <div class="title_container">
          <h2>Login:</h2>
      </div>
      <div class="row clearfix">
          <div class="">
              <form  [formGroup]="loginForm" (ngSubmit)="onSubmit()">
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                      <input type="email" formControlName="email" placeholder="Email" required />
                  </div>
                  <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                      <input type="password"  formControlName="password" placeholder="Password" required />
                  </div >
                   
                  <input class="button" type="submit" value="login" />
              </form>
          </div>
      </div>
  </div>
</div>
<p class="credit"><i class="fa fa-lock"><a href="#" target="_blank"> Secure</a></i></p>`,
  styleUrls: ['./login.component.css']
})


export class LoginComponent  {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService.login(email, password).subscribe((response) => {
      if (response) {
        this.router.navigate(['/ticket-group']);
      } else {
        alert('error');
      }

    })
  }

}
