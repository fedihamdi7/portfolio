import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  generateStrings(number: number, str: string): string[] {
    let result = [];
    for (let i = 1; i <= number; i++) {
      result.push(`${str} (${i})`);
    }
    return result;
  }

  getProjects() {
    return [
      {
        title: 'PORTFOLIO',
        description: ` <p>This platform is a showcase of my skills and a journey through the projects that define my professional identity.</p>

        <li>A display of my work.</li>
        <li>Detailed project descriptions highlighting the challenges, solutions, and technologies used.</li>
        <li>A user-friendly interface for seamless navigation, ensuring an engaging experience.</li>
        
        <p>Explore and get to know the diverse skills and perspectives that define my approach to Full Stack Developement. I'm excited to share my passio and discuss potential collaborations.</p>
        
        <p>Thank you for visiting, and I look forward to connecting with you!</p>
  `,
        tools: ['Angular', 'Node Js', 'PrimeNG', 'Tailwindcss', 'Figma'],
        images: this.generateStrings(3, 'PORTFOLIO'),
      },
      {
        title: 'JOBS',
        link: 'https://github.com/fedihamdi7/jobs-frontend',
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
        tools: ['Angular', 'Nestjs', 'MongoDB', 'GitHub', 'PrimeNG', 'Figma'],
        images: this.generateStrings(15, 'JOBS'),
      },
      {
        title: 'CLS-RH',
        description: ` <p>
        I conceptualized and implemented a comprehensive platform using the MEAN Stack, aimed at digitizing paperwork processes. This encompassed managing suppliers, their invoices, and contracts, as well as handling employee documentation such as work/internship certificates and leave requests. 
  
      </p>
      <p>Key features of the platform included: </p>
      <li>Admin Dashboard: A centralized hub for efficient management and oversight. </li>
      <li>In-App Notification System: Streamlining communication with real-time updates. </li>
      <li>Flutter App Integration: Developed a mobile app for employees using Flutter, incorporating ONE SIGNAL and Firebase for seamless push notifications.</li>
      <p>This project not only honed my skills in MEAN Stack development but also showcased my ability to create practical solutions that enhance organizational efficiency. </p>
  `,
        tools: [
          'Angular',
          'ExpressJs',
          'Node Js',
          'MongoDB',
          'Figma',
          'Flutter',
          'Angular Material',
        ],
        images: this.generateStrings(22, 'CLS-RH'),
      },
    ];
  }

  getEvents() {
    return [
      {
        title: 'Software Developer',
        place: 'DevYourApp - Work',
        date: 'February 2024 to Present',
        description:
          'I am currently working as an Angular Developer at DevYourApp, a Tunisian-Belgian startup. In this role, I am building two projects from scratch: the first is an online ticketing platform designed for public use, and the second is a stock management system tailored for use at ticket sales stands. These projects are allowing me to leverage my skills in Angular to create impactful solutions from the ground up.',
        tools: ['Angular','Angular Material', 'Sass', 'PHP', 'Gitlab', 'Postman', 'MySQL'],
      },
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
}
