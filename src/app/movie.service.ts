import { Injectable } from '@angular/core';
import { Movie, MovieDetail} from '../app/movie';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API_URL = `https://omdbapi.com/?`;
  private API_KEY = `&apikey=33865882`;

  constructor(private httpClient: HttpClient) {
  }

  getSuggestedMovies(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}&s=qstar${this.API_KEY}`);
  }

  getMovies(searchString: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}&s=${searchString}${this.API_KEY}`);
  }

  getMovieDetails(imdbId: string): Observable<any> {
    return this.httpClient.get(`https://www.omdbapi.com/?apikey=${this.API_KEY}&i=${imdbId}&plot=full`);
  }

  putCategory(movie: Movie): Observable<Movie> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Movie>("http://localhost:3000/movies/", movie, {headers: headers});
  }
}
