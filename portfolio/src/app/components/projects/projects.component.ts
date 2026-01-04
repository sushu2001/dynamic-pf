import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  icon?: string;
  tech?: string[];
  link?: string;
  github?: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  selectedProjectIndex: number = 0;

  selectProject(index: number): void {
    this.selectedProjectIndex = index;
  }

  projects: Project[] = [
    {
      title: 'CryptoSearch',
      description: 'Developed a website that fetches and displays real-time cryptocurrency data & price trends using the CoinGecko API.',
      tech: ['React.js', 'CoinGecko API'],
      link: '',
      github: 'https://github.com/sushu2001/crypto-info',
      live: 'https://cryptail.netlify.app/'
    },
    {
      title: 'Bookscollect',
      description: 'Built a web platform that allows users to create and manage their personal digital library. Implemented full CRUD functionality, enabling users to add, edit, and delete books, authors, and book covers seamlessly.',
      tech: ['React.js', 'Node.js', 'MongoDB'],
      link: '',
      github: 'https://github.com/sushu2001/Bookscollect',
      live: ''
    }
  ];
}
