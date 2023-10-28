import { Component } from '@angular/core';
import { FormService } from '../form.service'; // Import your FormService

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    address: '', // Make sure the property name matches what your backend expects
  };

  constructor(private formService: FormService) {}

  onSubmit() {
    this.formService.submitAddress(this.formData.address).subscribe(
      (response: any) => {
        console.log('Address data submitted successfully:', response);
        console.log(this.formData.address);
      },
      (error: any) => {
        console.error('Error submitting address data:', error);
      }
    );
  }
}
