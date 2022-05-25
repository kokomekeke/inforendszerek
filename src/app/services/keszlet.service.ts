import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Keszlet } from 'Backend/src/entity/Keszlet';
import { catchError, first, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KeszletService {
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  }

  constructor(private http: HttpClient) { }


  getKeszlet(): Observable<Keszlet[]>{
    return this.http.get<Keszlet[]>('/api/keszlet', {responseType: 'json'}).pipe(
      catchError(this.ErrorHandler)
    );
  }


  
  addKeszlet(formData: Partial<Keszlet>): Observable<Keszlet> {


    return this.http.post<Keszlet>('/api/keszlet', { id: formData.id, gyarto: formData.gyarto, rendszam: formData.rendszam, alvazszam: formData.alvazszam, datum: formData.datum, sorszam: formData.sorszam, dij: formData.dij, km: formData.km, statusz: formData.km, ugyfel: formData.ugyfel }, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }


//
//
  updateKeszlet(formData: Partial<Keszlet>, id: number): Observable<Keszlet> {
    return this.http.put<Keszlet>('/api/keszlet', { id: id, gyarto: formData.gyarto, rendszam: formData.rendszam, alvazszam: formData.alvazszam, datum: formData.datum, sorszam: formData.sorszam, dij: formData.dij, km: formData.km, statusz: formData.statusz, ugyfel: formData.ugyfel }, this.httpOptions).pipe(
      first(),
      catchError(this.ErrorHandler)
    );
  }

  

  delKeszlet(id: number): Observable<{}> {

    return this.http.delete<Keszlet>('/api/keszlet/'+id,this.httpOptions ).pipe(
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
