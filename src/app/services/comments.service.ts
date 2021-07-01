import { Injectable } from "@angular/core";

import { Comment } from "../interfaces/comment";

import { Observable, of } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommentsService{
    constructor(
        private _http: HttpClient
    ){}

    private commentsUrl = 'http://simple-api.herokuapp.com/api/v1/comments';

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };

    getComments(): Observable<Comment[]>{
        return this._http.get<Comment[]>(this.commentsUrl)
            .pipe(
                catchError(this.handleError<Comment[]>('getComments', []))
        );
    }

    getComment(id: number): Observable<Comment | undefined>{
      const url = `${this.commentsUrl}/${id}`;
      return this._http.get<Comment>(url)
      .pipe(
        catchError(this.handleError<Comment>(`getComment id=${id}`))
      );
    }

    addComment(comment: Comment): Observable<Comment> {
        return this._http.post<Comment>(this.commentsUrl, comment, this.httpOptions)
        .pipe(
          catchError(this.handleError<Comment>('addComment'))
      );
    }

    updateComment(comment: Comment): Observable<any> {
      return this._http.post(this.commentsUrl, comment, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateComment'))
      );
    }
    
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
    }
    
}