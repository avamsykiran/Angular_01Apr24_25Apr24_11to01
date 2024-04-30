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
  errMsg!:string;

  constructor(private contactService:ContactService){

  }

  ngOnInit(){
    this.refresh();
  }

  refresh(){
    this.contactService.getAll().subscribe({
      next: data => this.contacts=data , 
      error: err => {console.error(err); this.errMsg="Unable to load data! Please retry later!";}
    });
  }

  deleteContact(id:number){
    this.contactService.deleteById(id).subscribe({
      next: () => this.refresh() ,
      error: err => {console.error(err); this.errMsg="Unable to delete data! Please retry later!";}
    });
  }
}
