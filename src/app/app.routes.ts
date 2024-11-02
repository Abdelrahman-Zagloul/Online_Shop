import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductFormComponent } from './component/product-form/product-form.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'productForm',component:ProductFormComponent},
  { path: '**', component: NotFoundComponent }
];
