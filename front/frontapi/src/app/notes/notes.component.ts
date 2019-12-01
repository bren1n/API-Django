import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Array<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes() {
    this.api.getNotes().subscribe(data => this.notes = data);
  }

  deleteNote(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      return this.api.deleteNote(id).subscribe(data => { this.getNotes() });
    }
  }
}
