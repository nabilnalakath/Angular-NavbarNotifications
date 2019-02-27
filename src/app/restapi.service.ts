import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {


   endpoint = 'https://yourjson.com/index.php/api/data/8682876';


  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get(this.endpoint);
  }
}
