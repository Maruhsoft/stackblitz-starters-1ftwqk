import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section id="about" class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">About Me</h2>
        <div class="max-w-3xl">
          <p class="text-lg mb-6">
            I'm a versatile technology professional with expertise spanning full-stack web development,
            mobile app development, and cybersecurity. My passion lies in creating secure, scalable,
            and user-friendly solutions that make a real impact.
          </p>
          <p class="text-lg">
            With a comprehensive understanding of modern development practices and security principles,
            I bring a unique perspective that combines innovative development with robust security measures.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}