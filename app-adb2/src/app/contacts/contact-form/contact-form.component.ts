import { Component, computed, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgBoxComponent } from '../../shared/msg-box/msg-box.component';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, MsgBoxComponent],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  private fb = inject(NonNullableFormBuilder);
  private contactsService = inject(ContactsService);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute); 

  readonly isEditMode = signal(false);
  readonly isLoading = signal(false);
  readonly isSaving = signal(false);
  readonly errMsg = signal('');
  readonly submitLabel = computed(() => this.isEditMode() ? 'Update Contact' : 'Save Contact');

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
      this.isEditMode.set(true);
      this.isLoading.set(true);
      this.contactsService.getContactById(Number(cid)).subscribe({
        next: contact => {
          this.contactForm.patchValue(contact);
          this.isLoading.set(false);
        },
        error: err => {
          console.error(err);
          this.errMsg.set('Sorry, unable to fetch contact data! Please retry later');
          this.isLoading.set(false);
        }
      })
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      const resultContact: Contact = this.contactForm.getRawValue();
      this.isSaving.set(true);
      this.errMsg.set('');

      let ob:Observable<Contact>;
      if(this.isEditMode()){
        ob=this.contactsService.updateContact(resultContact);
      }else{
        ob=this.contactsService.addContact(resultContact);
      }

      ob.subscribe({
        next: () => this.router.navigateByUrl('/contacts'),
        error: err => {
          console.error(err);
          this.errMsg.set('Sorry, unable to save contact data! Please retry later');
          this.isSaving.set(false);
        }
      })
    }
  }
}
