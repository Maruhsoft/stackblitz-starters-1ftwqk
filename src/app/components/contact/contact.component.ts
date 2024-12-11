import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section id="contact" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Contact Me</h2>
        <div class="max-w-lg mx-auto">
          <div class="mb-8 space-y-2">
            <p class="flex items-center">
              <span class="font-semibold w-24">Email:</span>
              <a href="mailto:Maruhsoft@gmail.com" class="text-blue-600 hover:text-blue-800">
                Maruhsoft@gmail.com
              </a>
            </p>
            <p class="flex items-center">
              <span class="font-semibold w-24">Phone:</span>
              <a href="tel:+2348137881985" class="text-blue-600 hover:text-blue-800">
                +234 813 788 1985
              </a>
            </p>
          </div>
          <form (ngSubmit)="onSubmit()" class="space-y-4">
            <div>
              <label class="block mb-2">Name</label>
              <input
                type="text"
                [(ngModel)]="contactForm.name"
                name="name"
                class="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label class="block mb-2">Email</label>
              <input
                type="email"
                [(ngModel)]="contactForm.email"
                name="email"
                class="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label class="block mb-2">Message</label>
              <textarea
                [(ngModel)]="contactForm.message"
                name="message"
                class="w-full p-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Here you would typically handle the form submission
  }
}