import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  contactInfo = {
    phone: '+359 123 456 789',
    email: 'support@myproject.com',
    address: 'st. Primiera 123, Sofia, Bulgaria'
  };
}
