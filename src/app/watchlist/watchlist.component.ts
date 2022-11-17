import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})

export class WatchlistComponent implements OnInit {

  movies:any;
  movie:any;
  rating:any;

  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/moviedetail').subscribe(data => {
      this.movies = data;
      console.warn(data)
      });
  }

  ngOnInit(): void {
  }

  reviewMovie(movie: any) {
    console.warn('hey')
  }

  removeMovie(id: string) {
    console.warn(`http://localhost:3000/moviedetail/` + id)
    this.http.delete(`http://localhost:3000/moviedetail/` + id).subscribe()
    window.location.reload();
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

  addRating(id:string) {
    if (this.rating > -1 && this.rating < 11) {
      console.warn(id)
    }
  }
}