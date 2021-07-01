import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CommentsAddComponent } from './comments-add/comments-add.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsComponent } from './comments.component';
import { CommentsUpdateComponent } from './comments-update/comments-update.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    CommentsComponent,
    CommentsAddComponent,
    CommentsListComponent,
    CommentsUpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    CommentsComponent,
    CommentsAddComponent,
    CommentsListComponent,
    CommentsUpdateComponent
  ],
  providers: []
})
export class CommentsModule { }
