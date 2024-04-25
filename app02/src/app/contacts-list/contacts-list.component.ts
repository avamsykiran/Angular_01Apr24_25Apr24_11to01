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
    this.refresh();
  }

  refresh(){
    this.contacts=this.contactService.getAll();
  }

  deleteContact(id:number){
    this.contactService.deleteById(id);
    this.refresh();
  }
}
