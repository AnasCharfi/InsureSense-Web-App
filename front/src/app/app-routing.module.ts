import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './helpers_/auth.guard';
import { ChatbotComponent } from './component/chatbot/chatbot.component';



export const Approutes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: FullComponent,
    
    children: [
      { path: '', redirectTo: '/about', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/about'
  }
];
