import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  isLoggedIn = false;
  username = '';
  password = '';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/registration']);
    } else {
      alert('Incorrect username or password');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.username = '';
    this.password = '';
  }

}
