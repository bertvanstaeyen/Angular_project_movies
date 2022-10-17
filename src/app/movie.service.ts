import { Injectable } from '@angular/core';
import { Movie, MovieResult } from '../app/movie';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getMovies(): Observable<MovieResult> {
    return this.httpClient.get<MovieResult>("https://www.omdbapi.com/?s=toy&apikey=33865882");
  }

  getMovieById(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>("https://api.themoviedb.org/3/movie/" + id +"/watch/providers?api_key=b2728cbd1f0229bfdeb5442f72ab6a93");
  }

}
