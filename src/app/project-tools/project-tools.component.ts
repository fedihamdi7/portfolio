import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-tools',
  templateUrl: './project-tools.component.html',
  styleUrls: ['./project-tools.component.css']
})
export class ProjectToolsComponent {
  @Input('tool') tool: any;
}
