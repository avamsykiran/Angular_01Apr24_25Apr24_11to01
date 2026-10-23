import { Component, OnInit, signal } from '@angular/core';
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

  readonly contacts = signal<Contact[] | null>(null);  
  readonly errMsg = signal('');
  readonly loading = signal(true);

  constructor(private contactsService:ContactsService){
    
  }

  ngOnInit(){
    this.contactsService.getContacts().subscribe({
      next: data => {
        this.contacts.set(data);
        this.loading.set(false);
      },
      error: err => {
        console.error(err);
        this.errMsg.set('Sorry, unable to fetch data! Please retry later');
        this.loading.set(false);
      }
    });
  }

  removeContact(id:number){
    this.contactsService.deleteContactById(id).subscribe({
      next: () => {
        this.contacts.update(contacts =>
          contacts?.filter(contact => contact.contactId !== id) ?? null
        );
      },
      error: err => {
        console.error(err);
        this.errMsg.set('Sorry, unable to delete data! Please retry later');
      }
    })
  }
}
