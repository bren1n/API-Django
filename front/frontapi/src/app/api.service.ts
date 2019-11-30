import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Note } from 'src/app/note';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<any[]>(`${this.apiUrl}` + '/notes');
  }

  getNote(id: Number) {
    return this.http.get<Note>(`${this.apiUrl}` + '/notes/' + `${id}`)
  }

}
