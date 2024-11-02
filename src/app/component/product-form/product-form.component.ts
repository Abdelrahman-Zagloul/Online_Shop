import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { Iproduct } from '../model/iproduct';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Iproduct = { id: 0, name: '', price: 0, quantity: 0, imgSrc: '' }; 

  constructor(private sharedService: SharedService, private router: Router) {}

  addProduct() {
    this.sharedService.addProduct(this.product);
    this.router.navigate(['/product']);
  }
}
