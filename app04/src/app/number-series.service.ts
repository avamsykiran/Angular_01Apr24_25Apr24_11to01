import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  generateSeries(lb:number,ub:number):Observable<number>{

    const bgJob = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error(`${lb} as lower bound is greater than ${ub} the upper bound! Hence can not generate series`);
        return;
      }

      let value = lb;
      let handler = setInterval(()=>{
        observer.next(value);
        value++;
        if(value>ub){
          clearInterval(handler);
          observer.complete();
        }
      },500);
    };

    return new Observable<number>(bgJob);
  }
}
