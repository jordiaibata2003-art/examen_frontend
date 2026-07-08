import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { LoginComponent } from './pages/login/login';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { UserListComponent } from './pages/users/user-list/user-list';
import { ApproListComponent } from './pages/appro/appro-list/appro-list';
import { VenteListComponent } from './pages/ventes/vente-list/vente-list';
import { UserFormComponent } from './pages/users/user-form/user-form';
import { ApproFormComponent } from './pages/appro/appro-form/appro-form';
import { VenteFormComponent } from './pages/ventes/vente-form/vente-form';

export const routes: Routes = [
   {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'user-form',
    component: UserFormComponent
  },
  { path: 'user-form/:id', 
    component: UserFormComponent
   },
  {
    path: 'appro',
    component: ApproListComponent
  },
  {
    path: 'appro-form',
    component: ApproFormComponent
  },
   {
    path: 'appro/new',
    component: ApproFormComponent
  },
   {
    path: 'appro-form/:id',  
    component: ApproFormComponent
  },
  {
    path: 'ventes',
    component: VenteListComponent
  },
  {
    path: 'vente-form',
    component: VenteFormComponent
  },
  {
  path: 'vente-form/:id',
  component: VenteFormComponent
},
  {
    path: '**',
    redirectTo: ''
  }
];