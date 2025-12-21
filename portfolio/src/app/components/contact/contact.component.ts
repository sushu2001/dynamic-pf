import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false;
  isLoading = false;

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.isLoading = true;
      
      // Simulate form submission
      setTimeout(() => {
        this.submitted = true;
        this.isLoading = false;
        
        // Reset form after 3 seconds
        setTimeout(() => {
          this.resetForm();
        }, 3000);
      }, 1000);
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
    this.submitted = false;
  }
}
