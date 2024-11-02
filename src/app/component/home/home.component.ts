
import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { Section1Component } from "./section1/section1.component";
import { Section2Component } from "./section2/section2.component";
import { Section3Component } from "./section3/section3.component";
import { Section4Component } from "./section4/section4.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,HeaderComponent, Section1Component, Section2Component, Section3Component, Section4Component],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ScrollToTop: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.ScrollToTop = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
