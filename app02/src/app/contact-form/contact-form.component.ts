import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact:Contact;

  constructor(private contactService:ContactService,private router:Router ){
    this.contact={id:0,fullName:'',mobile:'',mail:'',dateOfBirth:''};
  }

  formSubmitted(){
    this.contactService.add(this.contact);
    this.router.navigateByUrl("/list");
  }
}
