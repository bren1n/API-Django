import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes-new',
  templateUrl: './notes-new.component.html',
  styleUrls: ['./notes-new.component.css']
})
export class NotesNewComponent implements OnInit {
  user_id = parseInt(sessionStorage.getItem('user'));
  @Input() note = { title: "", content: "", user: this.user_id }

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  addNote(note) {
    return this.api.addNote(note).subscribe(data => { this.router.navigate([`/notes/${this.user_id}`]) })
  }
}
