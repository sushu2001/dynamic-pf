import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Profile {
  name: string;
  platform: string;
  description: string;
  link: string;
  icon: string;
}

@Component({
  selector: 'app-coding-profiles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coding-profiles.component.html',
  styleUrl: './coding-profiles.component.scss'
})
export class CodingProfilesComponent {
  profiles: Profile[] = [
    {
      name: 'LeetCode',
      platform: 'LeetCode',
      description: '900+ Problems Solved',
      link: 'https://leetcode.com',
      icon: '📊'
    },
    {
      name: 'Codeforces',
      platform: 'Codeforces',
      description: 'Specialist',
      link: 'https://codeforces.com',
      icon: '🏆'
    },
    {
      name: 'GeeksforGeeks',
      platform: 'GeeksforGeeks',
      description: 'DSA Enthusiast',
      link: 'https://geeksforgeeks.org',
      icon: '🎯'
    },
    {
      name: 'GitHub',
      platform: 'GitHub',
      description: 'Projects & Repositories',
      link: 'https://github.com',
      icon: '💻'
    }
  ];
}
