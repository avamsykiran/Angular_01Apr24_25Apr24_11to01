import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts: Contact[];
  private nextId: number;

  constructor() {
    this.nextId = 0;
    this.contacts = [
      { id: ++this.nextId, fullName: 'Vamsy Kiran', mobile: '9052224753', mail: 'vamsy@gmail.com', dateOfBirth: '1986-06-22' },
      { id: ++this.nextId, fullName: 'Sagar', mobile: '9948016004', mail: 'vamsy@gmail.com', dateOfBirth: '1987-06-22' }
    ];
  }

  getAll():Contact[]{
    return [...this.contacts];
  }

  getById(id:number):Contact|undefined{
    return this.contacts.find(c => c.id===id);
  }

  add(c:Contact){
    c.id=++this.nextId;
    this.contacts.push(c);
  }

  update(c:Contact){
    let index = this.contacts.findIndex(x => x.id===c.id);
    if(index>-1){
      this.contacts[index]=c;
    }
  }

  deleteById(id:number){
    let index = this.contacts.findIndex(c => c.id===id);
    if(index>-1){
      this.contacts.splice(index,1);
    }
  }
}
