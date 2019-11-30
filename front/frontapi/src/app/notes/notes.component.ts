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

}
