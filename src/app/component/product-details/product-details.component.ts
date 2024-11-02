import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsList } from '../model/productList';
import { Iproduct } from '../model/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  imports:[FormsModule,CommonModule],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Iproduct | undefined;

  constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
  const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(productId)) {
      this.product = productsList.find(item => item.id === productId);
    }
  }
}
