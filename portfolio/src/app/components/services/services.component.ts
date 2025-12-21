import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Full-Stack Development',
      description: 'Building scalable web applications',
      icon: '🚀',
      image: 'https://via.placeholder.com/300x200?text=Full-Stack'
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive UI with Angular & React',
      icon: '🎨',
      image: 'https://via.placeholder.com/300x200?text=Frontend'
    },
    {
      title: 'Backend Solutions',
      description: 'API Development with Node.js & NestJS',
      icon: '⚙️',
      image: 'https://via.placeholder.com/300x200?text=Backend'
    }
  ];
}
