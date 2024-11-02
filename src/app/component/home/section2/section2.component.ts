import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section2',
  standalone: true,
  imports: [],
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.css'
})
export class Section2Component {
constructor(private router: Router){}
goToProduct(){
  this.router.navigate(['/product']);
}
}
