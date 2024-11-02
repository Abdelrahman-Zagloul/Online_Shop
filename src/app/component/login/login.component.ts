import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  nameValue: string = '';
  passwordValue: string = '';
  errorMessage: string = '';

  constructor(private sharedService: SharedService, private router: Router) {}

  sendData() {
    if (this.nameValue.length < 4) {
      this.errorMessage = 'User Name must be at least 3 characters long.';
      return false;
    }
    if (this.passwordValue.length < 5) {
      this.errorMessage = 'Password must be at least 5 characters long.';
      return false;
    }
    this.sharedService.setUserName(this.nameValue);
    this.sharedService.setLoggedInStatus(true);
    return true;
  }
  Submit() {
    if (this.sendData()) {
      this.router.navigate(['/home']);
    }
  }
}
