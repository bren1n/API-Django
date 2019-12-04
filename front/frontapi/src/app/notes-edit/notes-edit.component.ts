import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-notes-edit',
  templateUrl: './notes-edit.component.html',
  styleUrls: ['./notes-edit.component.css']
})
export class NotesEditComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  note: any = {};
  user = parseInt(sessionStorage.getItem('user'))

  constructor(private api: ApiService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.api.getNote(this.user, this.id).subscribe(data => { this.note = data })
  }

  updateNote() {
    return this.api.updateNote(this.user, this.id, this.note).subscribe(data => { this.router.navigate([`/notes/${this.user}`]) })
  }

}
