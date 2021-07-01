import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { CommentsComponent } from './comments/comments.component';
import { CommentsRoutingModule } from './comments/comments.routing';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  // {path: '**', component: NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    CommentsRoutingModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
