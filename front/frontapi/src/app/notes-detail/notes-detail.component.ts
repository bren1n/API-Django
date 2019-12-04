import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Note } from 'src/app/note';


@Component({
  selector: 'app-notes-detail',
  templateUrl: './notes-detail.component.html',
  styleUrls: ['./notes-detail.component.css']
})
export class NotesDetailComponent implements OnInit {
  note: Note
  
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getNote(parseInt(sessionStorage.getItem('user')), this.route.snapshot.params['id']);
  }
  
  getNote(user_id, id: number) {
    return this.api.getNote(user_id, id).subscribe(data => this.note = data);
  }
}
