import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-msg-box',
  imports: [],
  templateUrl: './msg-box.component.html',
  styleUrl: './msg-box.component.css'
})
export class MsgBoxComponent {

  @Input()
  message:string = "";

  @Input()
  messageType:"info" | "error" = "info";

}
