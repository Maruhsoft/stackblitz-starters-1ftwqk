import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HeaderComponent } from './app/components/header/header.component';
import { AboutComponent } from './app/components/about/about.component';
import { SkillsComponent } from './app/components/skills/skills.component';
import { ProjectsComponent } from './app/components/projects/projects.component';
import { ContactComponent } from './app/components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  template: `
    <div class="min-h-screen">
      <app-header />
      <main>
        <app-about />
        <app-skills />
        <app-projects />
        <app-contact />
      </main>
      <footer class="bg-gray-900 text-white py-6 text-center">
        <p>&copy; {{ currentYear }} Maruh Phronesis Vulcan Akporowho. All rights reserved.</p>
      </footer>
    </div>
  `,
})
export class App {
  currentYear = new Date().getFullYear();
}

bootstrapApplication(App);