import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule
  ],

  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  /**
   * Controls mobile navigation visibility
   */
  mobileMenuOpen = false;


  /**
   * Toggle mobile navigation
   */
  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


  /**
   * Close mobile navigation
   */
  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

}

