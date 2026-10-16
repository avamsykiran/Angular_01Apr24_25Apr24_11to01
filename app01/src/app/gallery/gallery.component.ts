import { Component } from '@angular/core';
import { SHARED_MODULES } from '../app.config';

@Component({
  selector: 'app-gallery',
  imports: [...SHARED_MODULES],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  banners: string[];
  bannerIndex: number;
  bannerWidth:number;

  constructor() {
    this.banners = [
      "assets/imgs/w1.jpeg",
      "assets/imgs/w2.jpeg",
      "assets/imgs/w3.jpeg",
      "assets/imgs/w4.jpeg",
    ];
    this.bannerIndex = 0;
    this.bannerWidth=50;
  }

  changeBanner() {
    this.bannerIndex++;
    if (this.bannerIndex >= this.banners.length) {
      this.bannerIndex = 0;
    }
  }
}
