import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contact } from '../../models/contact';
import { MsgBoxComponent } from '../../shared/msg-box/msg-box.component';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  imports: [MsgBoxComponent,TitleCasePipe,DatePipe,RouterLink ],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent implements OnInit {

  contacts!:Contact[];
  errMsg!:string;

  constructor(private contactsService:ContactsService){
    
  }

  ngOnInit(){
    this.contactsService.getContacts().subscribe({
      next: data => this.contacts=data,
      error: err => { console.error(err); this.errMsg="Sorry, unable to fetech data! Please retry later"; }      
    });
  }

  removeContact(id:number){
    this.contactsService.deleteContactById(id).subscribe({
      next: () => { 
        let index=this.contacts.findIndex(cx => cx.contactId===id);
        this.contacts.splice(index,1);
      },
      error: err => { console.error(err); this.errMsg="Sorry, unable to delete data! Please retry later"; }
    })
  }
}
