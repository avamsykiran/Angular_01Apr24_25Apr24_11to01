import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  private fb = inject(NonNullableFormBuilder);
  private contactsService = inject(ContactsService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute); 

  isEditMode:boolean = false;

  // Form Definition with initial default values mapping properties cleanly
  protected contactForm = this.fb.group({
    contactId:[0],
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    mobileNumber: ['', [Validators.required, Validators.pattern(/[6-9][0-9]{9}/)]],
    mailId: ['', [Validators.required, Validators.email]],
    dateOfBirth: ['', [Validators.required]]
  });

  // Getter for shorter controls lookup syntax in template expressions
  get f() {
    return this.contactForm.controls;
  }

  ngOnInit(): void {
    let cid = this.activatedRoute.snapshot.params['cid'];

    if(cid){
      this.isEditMode=true;
      this.contactsService.getContactById(Number(cid)).subscribe({
        next:contact=>this.contactForm.patchValue(contact),
        error: err => console.error(err)
      })
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const resultContact: Contact = this.contactForm.getRawValue();
      
      let ob:Observable<Contact>;
      if(this.isEditMode){
        ob=this.contactsService.updateContact(resultContact);
      }else{
        ob=this.contactsService.addContact(resultContact);
      }

      ob.subscribe({
        next: contact => this.router.navigateByUrl("/contacts"),
        error: err => console.error(err)
      })
    }
  }
}
