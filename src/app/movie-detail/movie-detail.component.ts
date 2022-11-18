import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {
  movieDetail:any;
  movieId = this.route.snapshot.paramMap.get('id')?.toString();

  constructor(private movieService: MovieService, private route: ActivatedRoute, private http: HttpClient) {
    this.movieDetail = this.http.get(`https://www.omdbapi.com/?apikey=3933c744&i=${this.movieId}`).subscribe((data)=>{
      this.movieDetail = data
    })
   }

  ngOnInit(): void { }

  //Add movie to watchlist
  movieToWatchList() {
    if (this.movieDetail.Title != null) {
      this.http.post('http://localhost:3000/moviedetail', 
      {Title: this.movieDetail.Title, Poster: this.movieDetail.Poster, Year: this.movieDetail.Year, Watched: false, Rating:null, Reaction:null} ).subscribe((data)=>{
        console.warn(data)
      })  
    }
    window.location.href = '/watchlist';
  }
  
}
