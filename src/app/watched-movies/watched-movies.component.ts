import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { WatchedMovieService } from '../watched-movie.service';

@Component({
  selector: 'app-watched-movies',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.css']
})
export class WatchedMoviesComponent implements OnInit {

  movies$: Observable<Movie[]> = new Observable<Movie[]>();

  constructor(private watchlistService: WatchedMovieService) { }
    
  ngOnInit(): void {
    this.movies$ = this.watchlistService.getMovies();
  }

  }