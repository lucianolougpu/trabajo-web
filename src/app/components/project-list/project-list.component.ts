import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../project-card/project-card.component'; // Importa ProjectCardComponent aquí

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent], // Importa ProjectCardComponent en este componente
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  // Aquí es donde en el futuro tendrás una lista de proyectos, por ahora simulamos con 2
  // projects = [
  //   { id: 1, name: 'Plataforma E-commerce', client: 'Cliente Alfa', status: 'En Progreso', progress: 70 },
  //   { id: 2, name: 'App Móvil Fitness', client: 'Cliente Beta', status: 'Activo', progress: 30 }
  // ];
}