import { Component, Input, OnInit } from '@angular/core';
import { Movie} from '../movie';
import { MovieService } from '../movie.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAdd: boolean = false;
  isSubmitted: boolean = false;

  movie: Movie = {
    Title: '',
    Year: '',
    imdbID: 0,
    Type: '',
    Poster: ''
  }

  movies: any = [];

  movie$: Subscription = new Subscription();
  postMovie$: Subscription = new Subscription();


  constructor(private router: Router, private movieService: MovieService) { 
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.['mode'] === 'add';

    if (!this.isAdd) {
      this.isAdd = true;
    }


  }
  
  ngOnInit(): void {
    //this.movieService.getSuggestedMovies().subscribe();
  }

  // search movies
  getMovies(searchString: string){
    this.movieService.getMovies(searchString).subscribe(response => {
      console.log(response)
      this.movies = response.Search;
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postMovie$ = this.movieService.postMovie(this.movie).subscribe({
        next: (v) => this.router.navigateByUrl("/Watchlist"),
      });
    }
    
  }


}
