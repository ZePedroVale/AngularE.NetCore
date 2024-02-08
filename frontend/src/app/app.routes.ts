import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Ajuste o caminho conforme a sua estrutura de pastas
import { AboutComponent } from './about/about.component'; // Ajuste o caminho conforme a sua estrutura de pastas

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Redirecionamento para 'home' como padrão
];
