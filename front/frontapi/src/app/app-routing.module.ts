import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component'
import { NotesDetailComponent } from './notes-detail/notes-detail.component'
import { NotesEditComponent } from './notes-edit/notes-edit.component'
import { NotesNewComponent } from './notes-new/notes-new.component'

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent,
    data: { title: 'Note list' }
  },
  {
    path: 'notes-detail/:id',
    component: NotesDetailComponent,
    data: { title: 'Note detail' }
  },
  {
    path: 'notes-new',
    component: NotesNewComponent,
    data: { title: 'Add note' }
  },
  {
    path: 'notes-edit/:id',
    component: NotesEditComponent,
    data: { title: 'Edit note' }
  },
  { path: '',
    redirectTo: '/notes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
