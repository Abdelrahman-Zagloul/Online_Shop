import { Component } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-section3',
  standalone: true,
  imports: [],
  templateUrl: './section3.component.html',
  styleUrl: './section3.component.css'
})
export class Section3Component {
  constructor(private router:Router){}
goToProduct(){
  this.router.navigate(['/product']);
}
}
