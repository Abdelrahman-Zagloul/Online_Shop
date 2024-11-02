import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../shared.service';
import { Iproduct } from '../model/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Iproduct[] = [];
  cart: Iproduct[] = [];
  cartCount: number = 0;
  ScrollToTop: boolean = false;

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.sharedService.products$.subscribe(products => {
      this.products = products;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.ScrollToTop = window.pageYOffset > 300;
  }

  goToProductForm() {
    this.router.navigate(['/productForm']);
  }

  addToCart(product: Iproduct): void {
    this.cart.push(product);
    this.cartCount++;
  }

  goToDetails(productId: number): void {
    this.router.navigate(['/product/', productId]);
  }

  deleteProduct(productId: number): void {
    this.products = this.products.filter(item => item.id !== productId);
    this.sharedService.initializeProducts(this.products);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
