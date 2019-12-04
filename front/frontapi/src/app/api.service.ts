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

  getNotes(user_id) {
    return this.http.get<any[]>(`${this.apiUrl}/notes/${user_id}`);
  }

  getNote(user_id, id) {
    return this.http.get<Note>(`${this.apiUrl}/notes/${user_id}/${id}`)
  }

  addNote(note) {
    return this.http.post<Note>(`${this.apiUrl}/notes`, JSON.stringify(note), this.httpOptions)
  }

  updateNote(user_id, id, note) {
    return this.http.put<Note>(`${this.apiUrl}/notes/${user_id}/${id}`, JSON.stringify(note), this.httpOptions)
  }

  deleteNote(id, user_id) {
    return this.http.delete<Note>(`${this.apiUrl}/notes/${user_id}/${id}`)
  }

  authenticateUser(username, password) {
    return this.http.get<User>(`${this.apiUrl}/users/${username}/${password}`)
  }

}
