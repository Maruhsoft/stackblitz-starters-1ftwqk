import { SkillCategory } from '../types/skill.interface';

export const skillsData: SkillCategory[] = [
  {
    title: 'Web Development',
    skills: [
      {
        name: 'Frontend',
        technologies: ['Angular', 'React', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap']
      },
      {
        name: 'Backend',
        technologies: ['Node.js', 'Express.js', 'NestJS', 'Python', 'Django', 'FastAPI', 'PHP', 'Laravel']
      },
      {
        name: 'Database',
        technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
      }
    ]
  },
  {
    title: 'Mobile Development',
    skills: [
      {
        name: 'Cross-Platform',
        technologies: ['React Native', 'Flutter', 'Ionic']
      },
      {
        name: 'Native',
        technologies: ['Android (Kotlin/Java)', 'iOS (Swift)']
      }
    ]
  },
  {
    title: 'Cybersecurity',
    skills: [
      {
        name: 'Security Tools',
        technologies: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite', 'OWASP ZAP']
      },
      {
        name: 'Security Skills',
        technologies: ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Web Application Security']
      }
    ]
  }
];