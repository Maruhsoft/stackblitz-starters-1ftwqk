export interface Skill {
  name: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}