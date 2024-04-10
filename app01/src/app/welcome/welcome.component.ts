import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  userName:string;
  logos:string[];
  logoIndex:number;

  constructor(){
    this.userName="SomeBody";
    this.logoIndex=0;
    this.logos=[
      "assets/imgs/w1.png",
      "assets/imgs/w2.jpeg",
      "assets/imgs/w3.jpeg",
      "assets/imgs/w4.jpeg"
    ];
  }

  changeIndex(){
    this.logoIndex++;

    if(this.logoIndex===this.logos.length){
      this.logoIndex=0;
    }
  }
}
