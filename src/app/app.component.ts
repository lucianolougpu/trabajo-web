import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// IMPORTA TUS NUEVOS COMPONENTES AQUÍ
import { HeaderComponent } from './components/header/header.component';
import { DashboardSummaryComponent } from './components/dashboard-summary/dashboard-summary.component';
import { ProjectFiltersComponent } from './components/project-filters/project-filters.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
// ProjectCardComponent no se importa aquí directamente porque será usado por ProjectListComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // AÑADE TUS COMPONENTES AQUÍ
    HeaderComponent,
    DashboardSummaryComponent,
    ProjectFiltersComponent,
    ProjectListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'freeworks-dashboard';
}