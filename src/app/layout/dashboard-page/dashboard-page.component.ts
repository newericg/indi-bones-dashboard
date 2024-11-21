import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from 'primeng/toolbar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { SidebarComponent } from "../../shared/components/sidebar/sidebar.component";
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [ButtonModule, CommonModule, ToolbarModule, MenubarModule, SidebarComponent],
  providers: [
    provideAnimations()
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {

  items = [
    {
      menuitem: 'Home'
    },
  ]

}
