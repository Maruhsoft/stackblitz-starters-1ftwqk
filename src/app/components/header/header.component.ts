import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="bg-gray-900 text-white p-6">
      <nav class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Maruh Phronesis Vulcan Akporowho</h1>
        <div class="space-x-6">
          <a href="#about" class="hover:text-blue-400 transition-colors">About</a>
          <a href="#skills" class="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" class="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#contact" class="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}