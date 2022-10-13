import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MoviesService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchName: string = '';
  movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }

  movies$: Observable<Movie[]> = new Observable<Movie[]>();
  
  ngOnInit(): void {
    this.movies$ = this.movieService.getMovies();

  }
  
  onSearch() {
    this.searchEvent(this.searchName);
  }

  searchEvent(searchName: string) : Movie[]{
    return this.movies.filter(p => p.title.includes(searchName));
    
  }


}
