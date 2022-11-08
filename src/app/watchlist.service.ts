import { Injectable } from '@angular/core';
import { Movie } from './movie';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WatchlistService {


  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("http://localhost:3000/movies");
  }

  getMovieById(imdbID: number): Observable<Movie> {
    return this.httpClient.get<Movie>("http://localhost:3000/movies/" + imdbID);
  }

  putMovie(movie: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Movie>("http://localhost:3000/movies/", movie, {headers: headers});
  }

}