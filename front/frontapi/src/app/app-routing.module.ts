import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component'
import { NotesDetailComponent } from './notes-detail/notes-detail.component'
import { NotesEditComponent } from './notes-edit/notes-edit.component'
import { NotesNewComponent } from './notes-new/notes-new.component'
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path: 'notes/:user_id',
    component: NotesComponent,
    data: { title: 'Note list' }
  },
  {
    path: 'notes-detail/:user_id/:id',
    component: NotesDetailComponent,
    data: { title: 'Note detail' }
  },
  {
    path: 'notes-new',
    component: NotesNewComponent,
    data: { title: 'Add note' }
  },
  {
    path: 'notes-edit/:user_id/:id',
    component: NotesEditComponent,
    data: { title: 'Edit note' }
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
    data: { title: 'User Login' }
  },
  { path: '',
    redirectTo: '/notes/:user_id',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
