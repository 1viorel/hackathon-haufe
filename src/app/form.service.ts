import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private apiUrl = 'http://localhost:3000/submit-address'; // Use the correct URL

  constructor(private http: HttpClient) {}

  submitAddress(address: string) {
    return this.http.post(this.apiUrl, { address });
  }
}
