import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { MovieResult } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

   // movies$: Observable<MovieResult> = new Observable<MovieResult>();

    constructor(private movieService: MovieService) { }
    //movies!: Movie[];
    
    ngOnInit(): void {
    }
  }


