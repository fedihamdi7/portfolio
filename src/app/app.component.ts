import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.dark') isDarkMode: boolean | undefined;
  events: any;
  displayBasic: boolean = false;
  form : FormGroup = new FormGroup({
    email : new FormControl(),
    subject : new FormControl(),
    message : new FormControl()
  });
  images = [
    {
      itemImageSrc: 'login.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'register.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'login.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'login.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'register.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'login.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
  ];

  projects = [
    {
      title: 'JOBS',
      description: ` <p>
      JOBS is a web platform designed to connect job applicants with
      companies offering job opportunities. The platform provides a
      seamless experience for both applicants and companies, facilitating
      the job application process.
    </p>
    <p>Here some of it's features:</p>
    <li>User authentication for both applicants and companies.</li>
    <li>Applicant profiles with resume upload functionality.</li>
    <li>File upload such as company's logo, user's profile picture and resumes</li>
    <li>Job posting and management for companies.</li>
    <li>Job application and tracking for applicants.</li>
    <li>Real-time notifications for application updates.</li>
    <li>Search and filtering options for job listings.</li>
    <li>Negotiation System: Facilitate communication between applicants and companies, allowing negotiation on where and when to have the interview.</li>
`,
    },
  ];
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


  @ViewChild('experience') experience: ElementRef | undefined;
  @ViewChild('projects_section') projects_section: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;

  scrollToExperience() {
    this.experience!.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToProjects() {
    this.projects_section!.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact() {
    this.contact!.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
