import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Array<any>;
  user_id = parseInt(sessionStorage.getItem('user'));

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getNotes(this.user_id);
  }

  getNotes(user_id) {
    this.api.getNotes(user_id).subscribe(data => this.notes = data);
  }

  deleteNote(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      return this.api.deleteNote(id, this.user_id).subscribe(data => { this.getNotes(this.user_id) });
    }
  }
}
