import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section id="projects" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold mb-2">E-commerce Platform</h3>
            <p>A full-stack e-commerce solution built with Angular and Node.js</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold mb-2">Task Management App</h3>
            <p>Real-time task management application using Angular and Firebase</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold mb-2">Portfolio Website</h3>
            <p>Modern portfolio website built with Angular and TailwindCSS</p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {}