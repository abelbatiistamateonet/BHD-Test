import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CommentsAddComponent } from './comments-add/comments-add.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsUpdateComponent } from './comments-update/comments-update.component';
import { CommentsComponent } from './comments.component';


const routes: Routes = [
    {path: 'dashboard',
        component: CommentsComponent,
   //canActivate: [ AuthGuard ],
  children: [
    {path: '', component: DashboardComponent, data: { titulo: 'Dashboard'}},
    {path: 'addComments', component: CommentsAddComponent,data: { titulo: 'AddComments'}},
    {path: 'updateComments/:id', component: CommentsUpdateComponent,data: { titulo: 'UpdateComments'}},
    {path: 'listComments', component: CommentsListComponent,data: { titulo: 'ListComments'}}
  ]
}];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class CommentsRoutingModule { }