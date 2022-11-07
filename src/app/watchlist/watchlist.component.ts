import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { WatchlistService } from '../watchlist.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movies$: Observable<Movie[]> = new Observable<Movie[]>();

  constructor(private watchlistService: WatchlistService) { }
    
  ngOnInit(): void {
    this.movies$ = this.watchlistService.getMovies();
  }

  }

