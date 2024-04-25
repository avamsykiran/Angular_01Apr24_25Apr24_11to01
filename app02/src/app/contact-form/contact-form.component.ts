import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contact:Contact;
  isEditing:boolean;

  constructor(private contactService:ContactService,private router:Router,private activatedRoute:ActivatedRoute ){
    this.contact={id:0,fullName:'',mobile:'',mail:'',dateOfBirth:''};
    this.isEditing=false;
  }

  ngOnInit(){
    let cid = this.activatedRoute.snapshot.params["cid"];

    if(cid){
      this.isEditing=true;
      this.contact = this.contactService.getById(Number(cid))??{id:0,fullName:'',mobile:'',mail:'',dateOfBirth:''};
    }
  }

  formSubmitted(){
    if(this.isEditing){
      this.contactService.update(this.contact);
    }else{
      this.contactService.add(this.contact);
    }
    
    this.router.navigateByUrl("/list");
  }
}
