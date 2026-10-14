import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home')
        .then(m => m.HomeComponent)
  },

  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products')
        .then(m => m.ProductsComponent)
  },

  {
    path: 'clients',
    loadComponent: () =>
      import('./pages/clients/clients')
        .then(m => m.ClientsComponent)
  },

  {
    path: 'achievements',
    loadComponent: () =>
      import('./pages/achievements/achievements')
        .then(m => m.AchievementsComponent)
  },

  {
    path: 'careers',
    loadComponent: () =>
      import('./pages/careers/careers')
        .then(m => m.CareersComponent)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact')
        .then(m => m.ContactComponent)
  },

  {
    path: '**',
    redirectTo: 'home'
  }

];