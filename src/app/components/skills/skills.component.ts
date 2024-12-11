import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { skillsData } from '../../data/skills.data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  template: `
    <section id="skills" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12">Skills & Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (category of skillsData; track category.title) {
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h3 class="text-xl font-bold mb-4 text-blue-600">{{ category.title }}</h3>
              @for (skill of category.skills; track skill.name) {
                <div class="mb-4">
                  <h4 class="font-semibold mb-2">{{ skill.name }}</h4>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of skill.technologies; track tech) {
                      <span class="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {{ tech }}
                      </span>
                    }
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  skillsData = skillsData;
}