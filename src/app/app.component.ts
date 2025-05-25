import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Select} from 'primeng/select';
import {FormsModule} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { NgIf } from '@angular/common';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    Select,
    FormsModule,
    NgIf,
    DatePickerModule,
    Button,
    Dialog
  ],
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'prime-ng-theme-check';


  visible: boolean = false;
  username: string = '';
  password: string = '';

  cities: any[] | undefined;

  selectedCity: any | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  selectedCountry: any | null = null;

  countries: any[] = [
    { name: 'Australia', code: 'AU' },
    { name: 'Brazil', code: 'BR' },
    { name: 'China', code: 'CN' },
    { name: 'Egypt', code: 'EG' },
    { name: 'France', code: 'FR' },
    { name: 'Germany', code: 'DE' },
    { name: 'India', code: 'IN' },
    { name: 'Japan', code: 'JP' },
    { name: 'Spain', code: 'ES' },
    { name: 'United States', code: 'US' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'Canada', code: 'CA' },
    { name: 'Italy', code: 'IT' },
    { name: 'Mexico', code: 'MX' },
    { name: 'Russia', code: 'RU' },
    { name: 'South Korea', code: 'KR' },
    { name: 'Netherlands', code: 'NL' },
    { name: 'Switzerland', code: 'CH' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Belgium', code: 'BE' }
  ];

  constructor() {}

  onCountryChange(event: any) {
    this.selectedCountry = event.value;
    console.log('Selected country:', this.selectedCountry);
  }



  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
    // Reset form when dialog closes
    this.resetForm();
  }

  onSignIn() {
    if (this.username && this.password) {
      // Handle login logic here
      console.log('Login attempt:', {
        username: this.username,
        password: this.password
      });

      // Example: Call authentication service
      // this.authService.login(this.username, this.password).subscribe({
      //   next: (response) => {
      //     console.log('Login successful:', response);
      //     this.closeDialog();
      //   },
      //   error: (error) => {
      //     console.error('Login failed:', error);
      //   }
      // });

      this.closeDialog();
    } else {
      console.warn('Please fill in both username and password');
    }
  }

  onCancel() {
    this.closeDialog();
  }

  private resetForm() {
    this.username = '';
    this.password = '';
  }

  // Optional: Handle form submission on Enter key
  onKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.onSignIn();
    }
  }


}
