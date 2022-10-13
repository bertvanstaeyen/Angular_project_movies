import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-watchlist-item',
  templateUrl: './watchlist-item.component.html',
  styleUrls: ['./watchlist-item.component.css']
})
export class WatchlistItemComponent implements OnInit {

  @Input() movie: Movie = {id: 0, title: "naam film", year: 2000, viewer_rating: 20, genre: "", cover_img: "", rating: "", duration_min: 90, cast: ["Name 1", "Name 2"]};

  constructor() { }

  ngOnInit(): void {
  }

}
