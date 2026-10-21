import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Routes, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  title:string;
  readonly menus: Routes = routes;

  constructor(){
    this.title="Address Book 1.0";
  }
}
