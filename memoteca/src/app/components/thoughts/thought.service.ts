import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IThought } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThoughtService {
  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) {}

  getAllThoughts(page: number, filter: string): Observable<IThought[]> {
    const itemsPerPage = 6;

    let params = new HttpParams()
      .set('_page', page)
      .set('_limit', itemsPerPage);

    if (filter.trim().length > 2) {
      params = params.set('q', filter);
    }

    return this.http.get<IThought[]>(this.API, { params: params });
  }

  createNewThought(data: IThought): Observable<IThought> {
    return this.http.post<IThought>(this.API, data);
  }

  updateThought(data: IThought): Observable<IThought> {
    const url = `${this.API}/${data.id}`;

    return this.http.put<IThought>(url, data);
  }

  deleteThoughtById(id: number): Observable<IThought> {
    const url = `${this.API}/${id}`;

    return this.http.delete<IThought>(url);
  }

  getThoughtById(id: number): Observable<IThought> {
    const url = `${this.API}/${id}`;

    return this.http.get<IThought>(url);
  }
}
