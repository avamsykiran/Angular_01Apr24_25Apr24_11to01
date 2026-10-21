import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-contacts-master',
  imports: [RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './contacts-master.component.html',
  styleUrl: './contacts-master.component.css'
})
export class ContactsMasterComponent {

}
