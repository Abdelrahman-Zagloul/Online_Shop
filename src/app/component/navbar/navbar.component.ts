import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userName: string = '';
  flag: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit() {
    this.sharedService.userName$.subscribe(name => {
      this.userName = name;
    });

    this.sharedService.isLoggedIn$.subscribe(status => {
      this.flag = status;
    });
  }

  logout() {
    this.sharedService.setLoggedInStatus(false);
    this.sharedService.setUserName('');
    this.router.navigate(['/login']);
  }
  Contact:any;
}

