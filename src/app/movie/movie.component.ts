import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input() movie: Movie = {id: 0, title: "naam film", year: 2000, viewer_rating: 20, genre: "", cover_img: "", rating: "", duration_min: 90, cast: ["Name 1", "Name 2"]};

  constructor() { }

  ngOnInit(): void {
    
  }


}
