import { Component, HostBinding } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.dark') isDarkMode: boolean | undefined;
  events: any;


  constructor(private themeService: ThemeService) {
    this.themeService.getDarkMode().subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
      // Default to dark mode for the body
      document.body.classList.add('dark');
    });

    this.events = [
      {
        title: 'Software Programmer',
        place: 'VERMEG - Work',
        date: 'October 2022 to june 2023',
        description:
          'In my role as a support and debugger, I played a role in providing assistance, resolving issues, troubleshooting and identifying the root causes of problems, demonstrating a keen ability to navigate complex technical challenges. Through effective communication and a solutions-driven approach.',
        tools: ['Jira', 'Java', 'Oracle', 'Gitlab', 'MySQL'],
      },
      {
        title: 'Full Stack Developer',
        place: 'CLS - End Of Studies Internship',
        date: 'February to June 2022',
        description:
          'Designed and developed a comprehensive HR documents management platform catering to both web and mobile interfaces. This involved creating an intuitive and secure system for efficiently organizing and accessing human resources-related documents. Ensuring a user-friendly experience for both web and mobile users. The project showcased my proficiency in full-stack development and my commitment to delivering solutions that meet the specific needs of HR management.',
        tools: [
          'Angular',
          'Node Js',
          'ExpressJs',
          'MongoDB',
          'GitHub',
          'Flutter',
          'Figma',
        ],
      },
      {
        title: 'Full Stack Developer',
        place: 'K&B Partners - Second Year Internship',
        date: 'June to August 2021',
        description:
          'Designed and developed an efficient time management platform for web. The user-friendly interface facilitates effective time tracking and task scheduling, empowering users to enhance productivity seamlessly.',
        tools: ['Laravel', 'Html 5', 'CSS3', 'JavaScript', 'MySQL'],
      },
    ];

  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }
}
