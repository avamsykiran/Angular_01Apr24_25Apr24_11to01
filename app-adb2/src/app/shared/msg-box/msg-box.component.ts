import { Component, input } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  imports: [],
  templateUrl: './msg-box.component.html',
  styleUrl: './msg-box.component.css'
})
export class MsgBoxComponent {

  //input() is the signal alternative to @Input() decorator.
  readonly message = input('');
  readonly messageType = input<'info' | 'error'>('info');

}
