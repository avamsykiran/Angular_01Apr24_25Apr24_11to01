import { Component } from '@angular/core';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb: number;
  ub: number;

  results!: number[];
  errMsg!: string | null;
  isComplete: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
    this.isComplete=true;
  }

  formSubmitted() {
    this.isComplete = false;
    this.results = [];
    this.errMsg = null;

    let ob = this.nss.generateSeries(this.lb, this.ub);

    ob.subscribe({
      next: val => this.results.push(val),
      error: err => { this.errMsg = err; this.isComplete = true; },
      complete: () => { this.isComplete = true; }
    });
  }

}
