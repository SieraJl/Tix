import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  ls = localStorage.getItem('user');
  name="";
  constructor(private authService: AuthService) {
    console.log("navbar:"+this.ls);
    if (this.isLoggedIn()&& this.ls!=null) {
      this.name=JSON.parse(this.ls).nom;
    }
  }
  logout() {
    this.authService.logout();
    window.location.reload();
}
isLoggedIn(): boolean { 
  return localStorage.getItem('user') !== null;
}
}
