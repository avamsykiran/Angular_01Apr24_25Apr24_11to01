import { Component } from '@angular/core';
import { SHARED_MODULES } from '../app.config';

@Component({
  selector: 'app-welcome',
  imports: [...SHARED_MODULES],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {

  userName:string;

  constructor(){
    this.userName="Some body";
   
  }

 
}
