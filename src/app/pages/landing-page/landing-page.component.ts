import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectService } from '../../service/project/project.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private projectService: ProjectService) {
    
  }

}
