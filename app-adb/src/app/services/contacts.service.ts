import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

const apiEndpoint:string = "http://localhost:9999/contacts";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private httpClient = inject(HttpClient); 

  //constructor(private httpClient:HttpClient) { }

  getContacts():Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(apiEndpoint);
  }

  getContactById(id:number):Observable<Contact> {
    return this.httpClient.get<Contact>(`${apiEndpoint}/${id}`);
  }
  
  deleteContactById(id:number):Observable<void> {
    return this.httpClient.delete<void>(`${apiEndpoint}/${id}`);
  }
  
  addContact(contact:Contact):Observable<Contact> {
    return this.httpClient.post<Contact>(apiEndpoint,contact);
  }

  updateContact(contact:Contact):Observable<Contact> {
    return this.httpClient.put<Contact>(apiEndpoint,contact);
  }

}
