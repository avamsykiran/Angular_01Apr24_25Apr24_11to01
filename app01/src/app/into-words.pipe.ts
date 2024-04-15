import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords'
})
export class IntoWordsPipe implements PipeTransform {

  private digits : string[];

  constructor(){
    this.digits=[
      "ZERO","ONE","TWO","THREE","FOUR",
      "FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let result="";

    let str = String(value);

    for(let i=0;i<str.length;i++){
      let ch = str.charAt(i);

      if("."===ch){
        result = `${result} dot`;
      }else{
        result = `${result} ${this.digits[Number(ch)]}`
      }
    }
    return result;
  }

}
