import { Component, Input, OnInit } from '@angular/core';
import { Movie} from '../movie';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any = [];

  constructor(private movieService: MovieService) { }
  
  ngOnInit(): void {
    
  }

  // search movies
  getMovies(searchString: string){
    this.movieService.getMovies(searchString).subscribe(response => {
      console.log(response)
      this.movies = response.Search;
    });
  }
}
