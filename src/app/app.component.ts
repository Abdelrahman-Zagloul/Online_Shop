import { Component,OnInit } from '@angular/core';
import { SharedService } from './component/shared.service';
import { RouterModule, RouterOutlet} from '@angular/router';
import { FooterComponent } from "./component/footer/footer.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { productsList } from './component/model/productList';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';
  constructor(private sharedService: SharedService) {}
  ngOnInit(): void {
    this.sharedService.initializeProducts(productsList);
  }
}
