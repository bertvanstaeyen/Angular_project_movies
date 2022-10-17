import { Component, Input, OnInit } from '@angular/core';
import { Movie, MovieResult } from '../movie';
import { MoviesService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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
