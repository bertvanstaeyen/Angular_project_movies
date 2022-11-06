import { Injectable } from '@angular/core';
import { Movie, MovieResult } from '../app/movie';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL = `https://omdbapi.com/?`;
  private API_KEY = `&apikey=33865882`;

  constructor(private httpClient: HttpClient) {
  }

  getMovies(searchString: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}&s=${searchString}${this.API_KEY}`);
  }


}
