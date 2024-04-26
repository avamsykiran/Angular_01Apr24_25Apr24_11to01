import { Component } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactForm:FormGroup;
  isEditing:boolean;

  constructor(private contactService:ContactService,private router:Router,private activatedRoute:ActivatedRoute ){
    this.contactForm = new FormGroup({
      id:new FormControl(0),
      fullName:new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      mobile:new FormControl('',[Validators.required,Validators.pattern('[1-9][0-9]{9}')]),
      mail:new FormControl('',[Validators.required,Validators.email]),
      dateOfBirth:new FormControl('',[Validators.required,this.minAge(18)])
    });
    this.isEditing=false;
  }

  get id(){
    return this.contactForm.controls['id'];
  }

  get fullName(){
    return this.contactForm.controls['fullName'];
  }

  get mobile(){
    return this.contactForm.controls['mobile'];
  }

  get mail(){
    return this.contactForm.controls['mail'];
  }

  get dateOfBirth(){
    return this.contactForm.controls['dateOfBirth'];
  }

  ngOnInit(){
    let cid = this.activatedRoute.snapshot.params["cid"];

    if(cid){
      this.isEditing=true;
      this.contactForm.reset(this.contactService.getById(Number(cid)));
    }
  }

  formSubmitted(){
    if(this.isEditing){
      this.contactService.update(this.contactForm.value);
    }else{
      this.contactService.add(this.contactForm.value);
    }
    
    this.router.navigateByUrl("/list");
  }

  minAge(ageLimit:number) : ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

      let isValid = true;

      let dobInputted = control.value;

      if(dobInputted){
        let dob = new Date(dobInputted);
        let today = new Date();
        let age = today.getFullYear() - dob.getFullYear();
        isValid = age >= ageLimit;
      }

      return isValid? null : {minAge:true}; 

    };
  }
}
