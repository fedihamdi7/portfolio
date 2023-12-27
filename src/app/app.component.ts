import { Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { MessageService } from 'primeng/api';

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
  align :string;
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
    private dataService: DataService,
    private messageService: MessageService
  ) {
    this.themeService.getDarkMode().subscribe((darkMode: boolean) => {
      this.isDarkMode = darkMode;
      if (this.isDarkMode) {
        document.body.classList.add('dark');
      }
    });

    if (window.innerWidth < 768) {
      this.align = 'stacazk';
    }else{
      this.align='alternate'
    }
  }

  @HostListener('window:resize', ['$eventResise'])
onResize(eventResise : any) {
  if (window.innerWidth < 768) {
    this.align = 'stack';
  } else {
    this.align = 'alternate';
  }
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
  emailLoading = false;
  onSubmit() {
    const formData = { ...this.form.value };
    if (!formData.email || !formData.subject || !formData.message) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all fields' });
      
      return;
    }
    this.emailLoading = true;
    this.http.post('https://portfolio-backend-three-phi.vercel.app/send-email', formData)
    .subscribe(response => {
    });
    setTimeout(() => {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Email sent successfully' });
      this.emailLoading = false;
    this.form.reset();
    }, 1000);
  }
}
