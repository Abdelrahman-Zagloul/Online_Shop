import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Iproduct } from './model/iproduct';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private userName = new BehaviorSubject<string>('');
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  private productsSource = new BehaviorSubject<Iproduct[]>([]);

  userName$ = this.userName.asObservable();
  isLoggedIn$ = this.isLoggedIn.asObservable();
  products$ = this.productsSource.asObservable();

  constructor() {}

  setUserName(name: string) {
    this.userName.next(name);
  }

  setLoggedInStatus(status: boolean) {
    this.isLoggedIn.next(status);
  }

  addProduct(product: Iproduct): void {
    const currentProducts = this.productsSource.value;
    this.productsSource.next([...currentProducts, product]);
  }

  initializeProducts(products: Iproduct[]): void {
    this.productsSource.next(products);
  }
}
