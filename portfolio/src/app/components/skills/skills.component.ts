import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Languages',
      skills: ['C++', 'Java','JavaScript', 'SQL', 'TypeScript', 'C']
    },
    {
      category: 'Development',
      skills: ['Angular', 'React.js', 'HTML', 'CSS', 'SCSS', 'REST', 'NestJS', 'Node.js', 'Postgres', 'ASP.NET Core', 'MongoDB']
    },
    {
      category: 'Fundamentals',
      skills: ['Data Structures and Algorithms', 'Object Oriented Programming', 'Database Management System', 
'Operating Systems', 'Computer Networks']
    },
    {
      category: 'Tools/Technologies',
      skills: ['CI/CD', 'Git', 'Azure Devops', 'Postman', 'Cypress', 'Jest', 'Docker', 'Kubernetes', 'Linux']
    }
  ];
}
