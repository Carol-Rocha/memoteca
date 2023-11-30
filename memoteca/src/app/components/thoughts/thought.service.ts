import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IThought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getAllThoughts(): Observable<IThought[]> {
    return this.http.get<IThought[]>(this.API);
  }
}
