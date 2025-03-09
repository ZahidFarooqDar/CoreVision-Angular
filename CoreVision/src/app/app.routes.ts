import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route for Home Page
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown routes to Home
];
