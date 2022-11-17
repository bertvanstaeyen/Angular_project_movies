import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  movieId = this.route.snapshot.paramMap.get('id')?.toString();
  movie:any;
  movieReaction:any;
  movieRating:any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.http.get('http://localhost:3000/moviedetail/' + this.movieId).subscribe(data => {
      this.movie = data;
      console.warn(data)
      });
  }

  ngOnInit(): void {
  }

  addReaction(movie: any) {
    this.http.get(`http://localhost:3000/moviedetail/` + movie.id).subscribe(data => {
      this.movie = data;
      console.warn(this.movie.Title)
      })
    this.http.put(`http://localhost:3000/moviedetail/` + movie.id, 
    {Title: movie.Title, Poster: movie.Poster, Year: movie.Year, Watched: movie.Watched, Rating: movie.Rating, Reaction: this.movieReaction})
    .subscribe()
  }

  addRating(movie:any){
    console.warn(this.movieRating)
    this.http.get(`http://localhost:3000/moviedetail/` + movie.id).subscribe(data => {
      this.movie = data;
      console.warn(this.movie.Title)
      })
    this.http.put(`http://localhost:3000/moviedetail/` + movie.id, 
    {Title: movie.Title, Poster: movie.Poster, Year: movie.Year, Watched: movie.Watched, Rating: this.movieRating, Reaction: movie.Reaction})
    .subscribe()
  }

  watched(movie: any) {
    this.http.get(`http://localhost:3000/moviedetail/` + movie.id).subscribe(data => {
      this.movie = data;
      console.warn(this.movie.Title)
      })
    this.http.put(`http://localhost:3000/moviedetail/` + movie.id, 
    {Title: movie.Title, Poster: movie.Poster, Year: movie.Year, Watched: true, Rating: movie.Rating, Reaction: movie.Reaction})
    .subscribe()
    window.location.href = '/watched';
  }
}
