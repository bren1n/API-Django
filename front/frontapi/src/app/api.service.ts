import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Note } from 'src/app/note';
import { User } from 'src/app/user';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getNotes() {
    return this.http.get<any[]>(`${this.apiUrl}/notes`);
  }

  getNote(id) {
    return this.http.get<Note>(`${this.apiUrl}/notes/${id}`)
  }

  addNote(note) {
    return this.http.post<Note>(`${this.apiUrl}/notes/`, JSON.stringify(note), this.httpOptions)
  }

  updateNote(id, note) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${id}`, JSON.stringify(note), this.httpOptions)
  }

  deleteNote(id) {
    return this.http.delete<Note>(`${this.apiUrl}/notes/${id}`)
  }

  authenticateUser(username, password) {
    return this.http.get<User>(`${this.apiUrl}/users/${username}/${password}`)
  }

}
