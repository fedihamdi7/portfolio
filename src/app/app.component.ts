import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @HostBinding('class.dark') isDarkMode: boolean | undefined;
  @ViewChild('experience') experience: ElementRef | undefined;
  @ViewChild('projects_section') projects_section: ElementRef | undefined;
  @ViewChild('contact') contact: ElementRef | undefined;

  displayBasic: boolean = false;
  form: FormGroup = new FormGroup({
    email: new FormControl(),
    subject: new FormControl(),
    message: new FormControl(),
  });

  projects = this.dataService.getProjects();
  events = this.dataService.getEvents();


  constructor(
    private themeService: ThemeService,
    private http: HttpClient,
    private dataService: DataService
  ) {
    this.themeService.getDarkMode().subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
      if (this.isDarkMode) {
        document.body.classList.add('dark');
      }
    });
  }

  toggleDarkMode() {
    this.themeService.toggleDarkMode();
  }



  scrollToExperience() {
    this.experience!.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToProjects() {
    this.projects_section!.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
  scrollToContact() {
    this.contact!.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }


  visible: boolean = false;
  selectedImage: string = '';
  selectedTitle: string = '';
  showDialog(img: any, title: string) {
    this.selectedImage = img;
    this.selectedTitle = title;
    this.visible = true;
  }

  DownloadResume() {
    fetch('../assets/resume/CV_FEDI_HAMDI.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'CV_FEDI_HAMDI.pdf';
        a.click();
      })
      .catch((error) => console.error(error));
  }
}
