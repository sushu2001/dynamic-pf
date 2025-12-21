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
      skills: ['C++', 'JavaScript', 'SQL', 'TypeScript']
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'React', 'HTML', 'CSS', 'SCSS']
    },
    {
      category: 'Backend',
      skills: ['Node.js', '.NET', 'C#']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'Kubernetes']
    }
  ];
}
