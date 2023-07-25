import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Predmet } from 'src/interfaces/Predmet';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PredmetService {
  private url = 'http://rest-akdp.bgdel.local/api/predmeti';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  readPredmet(): Observable<Predmet[]> {
    // console.warn('some data');
    return this.http
      .get<Predmet[]>(this.url)
      .pipe(catchError(this.handleError));
  }

  createPredmet(data: any): Observable<Predmet[]> {
    // console.warn('some data');
    return this.http
      .post<Predmet[]>(this.url, data)
      .pipe(catchError(this.handleError));
  }

  deletePredmet(id: number): Observable<Predmet[]> {
    return this.http
      .delete<Predmet[]>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  getCurrentPredmet(id: number): Observable<Predmet[]> {
    return this.http
      .get<Predmet[]>(`${this.url}/${id}`)
      .pipe(catchError(this.handleError));
  }

  updatePredmet(id: number, data: any): Observable<Predmet[]> {
    return this.http
      .put<Predmet[]>(`${this.url}/${id}`, data)
      .pipe(catchError(this.handleError));
  }

  sortByDate(date: any): Observable<Predmet[]> {
    // console.warn(`${this.url}/filter/${date}`);
    return this.http
      .post<Predmet[]>(`${this.url}/filter/${date}`, date)
      .pipe(catchError(this.handleError));
  }

  sortByDateRange(date1: any, date2: any): Observable<Predmet[]> {
    // console.warn(`${this.url}/filter/${date1}/${date2}`);
    return this.http
      .post<Predmet[]>(`${this.url}/filter/${date1}/${date2}`, {
        date1,
        date2,
      })
      .pipe(catchError(this.handleError));
  }

  sortByNaziv(naziv_predmeta: any): Observable<Predmet[]> {
    // console.warn(`${this.url}/filter3/${naziv_predmeta}`);
    return this.http
      .post<Predmet[]>(`${this.url}/filter3/${naziv_predmeta}`, naziv_predmeta)
      .pipe(catchError(this.handleError));
  }

  sortByPreuzimaOosoba(preuzima_osoba: any): Observable<Predmet[]> {
    // console.warn(`${this.url}/filter2/${preuzima_osoba}`);
    return this.http
      .post<Predmet[]>(`${this.url}/filter2/${preuzima_osoba}`, preuzima_osoba)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
