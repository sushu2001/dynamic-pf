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
  styleUrls: ['./coding-profiles.component.scss']
})
export class CodingProfilesComponent {
  profiles: Profile[] = [
    {
      name: 'LeetCode',
      platform: 'LeetCode',
      description: '3 ⭐ - 600+ Problems Solved',
      link: 'https://leetcode.com/u/underRater/',
      icon: 'assets/images/leetcode.png'
    },
    {
      name: 'GeeksforGeeks',
      platform: 'GeeksforGeeks',
      description: '300+ Problems Solved',
      link: 'https://www.geeksforgeeks.org/profile/sushu?tab=activity',
      icon: 'assets/images/gfg.png'
    },
    {
      name: 'CodeStudio',
      platform: 'CodeStudio',
      description: 'Specialist - 200+ Problems Solved',
      link: 'https://www.naukri.com/code360/profile/awatharesushant',
      icon: 'assets/icons/codebadge.svg'
    },
    {
      name: 'GitHub',
      platform: 'GitHub',
      description: '18+ Repositories',
      link: 'https://github.com/sushu2001',
      icon: 'assets/images/github.png'
    }
  ];

  isImage(value: string): boolean {
    if (!value) return false;
    return /\.(png|jpe?g|gif|svg)$/.test(value) || value.startsWith('assets/') || value.includes('/');
  }
}
