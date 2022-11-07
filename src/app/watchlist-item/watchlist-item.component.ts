import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.css']
})
export class WatchlistItemComponent implements OnInit {

@Input() movie: Movie = {
  Title: "naam film", Year: "", Type: "", Poster: "",
  imdbID: 0
};

  constructor() { }

  ngOnInit(): void {
  }

}
