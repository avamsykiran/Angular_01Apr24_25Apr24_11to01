import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';
import { ContactsListComponent } from './contacts-list.component';

describe('ContactsListComponent', () => {
  let contactsService: jasmine.SpyObj<ContactsService>;
  const contact: Contact = {
    contactId: 1,
    fullName: 'Ada Lovelace',
    mobileNumber: '9876543210',
    mailId: 'ada@example.com',
    dateOfBirth: '1815-12-10'
  };

  beforeEach(async () => {
    contactsService = jasmine.createSpyObj<ContactsService>(
      'ContactsService',
      ['getContacts', 'deleteContactById']
    );
    await TestBed.configureTestingModule({
      imports: [ContactsListComponent],
      providers: [
        provideRouter([]),
        { provide: ContactsService, useValue: contactsService }
      ]
    }).compileComponents();
  });

  it('loads and renders contacts through signal state', () => {
    contactsService.getContacts.and.returnValue(of([contact]));
    const fixture = TestBed.createComponent(ContactsListComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.loading()).toBeFalse();
    expect(fixture.componentInstance.contacts()).toEqual([contact]);
    expect(fixture.nativeElement.textContent).toContain('Ada Lovelace');
  });

  it('removes a contact by replacing the signal value', () => {
    contactsService.getContacts.and.returnValue(of([contact]));
    contactsService.deleteContactById.and.returnValue(of(void 0));
    const fixture = TestBed.createComponent(ContactsListComponent);
    fixture.detectChanges();

    fixture.componentInstance.removeContact(contact.contactId);

    expect(fixture.componentInstance.contacts()).toEqual([]);
  });
});
