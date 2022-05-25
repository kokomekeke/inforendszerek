import { Injectable } from '@angular/core';
import { Ugyfel } from 'Backend/src/entity/Ugyfel';
import { catchError, first, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UgyfelService {


  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient) { }

  async loadUgyfelek() {
    return this.http.get<Ugyfel[]>('/api/ugyfel').toPromise();
  }

  getUgyfel(): Observable<Ugyfel[]>{
    return this.http.get<Ugyfel[]>('/api/ugyfel', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }

  async addUgyfel1(ugyfel: Ugyfel) {
    return this.http.post<Ugyfel>('/api/ugyfel', ugyfel).toPromise();
  }

  addUgyfel(formData: Partial<Ugyfel>, id:number): Observable<Ugyfel> {

    return this.http.post<Ugyfel>('/api/ugyfel', { id:id, nev: formData.nev, cim: formData.cim, ig: formData.ig, tel: formData.tel }, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  updateUgyfel(formData: Partial<Ugyfel>, id:number): Observable<Ugyfel> {
    
    return this.http.put<Ugyfel>('/api/ugyfel', {id:id, nev: formData.nev, cim: formData.cim, ig: formData.ig, tel: formData.tel }, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  delUgyfel(id: Pick<Ugyfel, 'id'>): Observable<{}> {

    return this.http.delete<Ugyfel>('/api/ugyfel'+id,this.httpOptions ).pipe(
      catchError(this.ErrorHandler)
    );
  }


  private ErrorHandler(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again 7.6 minutes later.'));
  }
  
}
