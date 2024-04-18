import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {

  contacts!:Contact[];

  constructor(private contactService:ContactService){

  }

  ngOnInit(){
    this.contacts=this.contactService.getAll();
  }
}
