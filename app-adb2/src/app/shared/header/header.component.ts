import { Component, signal } from '@angular/core';
import { routes } from '../../app.routes';
import { Routes, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  readonly title = signal('Address Book 2.0');
  readonly menus: Routes = routes;
}

