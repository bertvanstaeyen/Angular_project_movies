import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResult } from '../movie';
import { MoviesService } from '../movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

    movies$: Observable<MovieResult> = new Observable<MovieResult>();

    constructor(private movieService: MoviesService) { }
    //movies!: Movie[];
    
    ngOnInit(): void {
      this.movies$ = this.movieService.getMovies();
      //this.movieService.getMovies().subscribe(
      //    m => {
      //      console.log(m);
      //      this.movies = m;
      //    }
      //)
      console.log(this.movies$);
  
      let test = this.movieService.getMovies().subscribe(r => {
        console.log(r);
      })
    }
  }


