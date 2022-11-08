import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class WatchedMovieService {

  constructor(private httpClient: HttpClient) { }

 // getWatchedMovies(): Observable<Movie[]>{
    //return this.http.get<Movie>("http://localhost:3000/watched_movies");
  //}

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>("http://localhost:3000/watched_movies");
  }
}
