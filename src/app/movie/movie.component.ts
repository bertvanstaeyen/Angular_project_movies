import { Component, Input, KeyValueDiffers, OnInit } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  isAdd: boolean = false;
  isSubmitted: boolean = false;

  @Input() movie: Movie = {
    Title: "naam film", Year: "", Poster: "", Type: "", imdbID: 0
  };

  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      
    }
  }

}
