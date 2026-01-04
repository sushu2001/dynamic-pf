import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  title: string;
  description: string;
  icon: string;
  image: string;
  company?: string;
  position?: string;
  duration?: string;
  achievements?: string[];
  certificateLink?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  selectedServiceIndex: number = 0;
  
  selectService(index: number): void {
    this.selectedServiceIndex = index;
  }

  services: Service[] = [
    {
      title: 'Emerson',
      description: 'Software Development Engineer',
      icon: '💼',
      image: '',
      company: 'Emerson',
      position: 'Software Development Engineer',
      duration: 'July 2023 – Present',
      achievements: [
        'Led the development of a smart object recognition engine to identify visual elements from technical diagrams, significantly reducing manual mapping efforts by 35% through intelligent pattern reuse.',
        'Introduced a comprehensive event logging mechanism to monitor all user and system activities, improving traceability, debugging efficiency, and audit compliance.',
        'Tackled a critical production bottleneck where report generation stalled for over 12 hours by implementing a cron-based monitoring job (every 30 seconds) and a 3-hour timeout mechanism to auto-fail stuck processes, ensuring timely execution and automated recovery — resulting in a 95% improvement in task reliability and system uptime.',
        'Developed a reusable symbol library with import/export functionality, streamlining the transfer of standardized components across projects. This reduced manual setup time by 90% (from ~3 hours to under 15 minutes), significantly boosting team efficiency and consistency.'
      ]
    },
    {
      title: 'Emerson',
      description: 'SDE Intern',
      icon: '🚀',
      image: '',
      company: 'Emerson',
      position: 'SDE Intern',
      duration: 'Feb 2023 – May 2023',
      achievements: [
        'Implemented Role-Based Access Control (RBAC) to segregate user rights between Emerson employees and external users, ensuring secure and restricted access to system functionalities.',
        'Developed a self-service help center for the Integrated Engineering Environment (IEE), providing users with topic-wise guidance, FAQs, and downloadable resources which enhanced usability by ~10% and reduced support dependencies.'
      ]
    },
    {
      title: 'Sushma Science Center',
      description: 'Developer Intern',
      icon: '🎓',
      image: '',
      company: 'Sushma Science Center',
      position: 'Developer Intern',
      duration: 'Dec 2021 – Apr 2022',
      certificateLink: 'https://drive.google.com/file/d/1COzOPEc9UQvgzTMEqVfnk57bx7ZgqmLF/view',
      achievements: [
        'Led end-to-end development of quiz hosting platform tailored for national-level competition (Toycathon), supporting role-based workflows for Admins, Content Creators, and Participants.',
        'Developed User and Content Creator Dashboards, enabling participants to track quiz activity and creators to manage quiz content with integrated admin approval workflows.'
      ]
    }
  ];
}
