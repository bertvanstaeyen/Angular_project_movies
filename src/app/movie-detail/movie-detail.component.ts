import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";

import { MovieService } from "../movie.service";
import { MovieDetail, Movie } from "../movie";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movieDetail: any;
  movieId = this.route.snapshot.paramMap.get('id')?.toString();

  constructor(private movieService: MovieService, private route: ActivatedRoute, private http: HttpClient) {
    this.movieDetail = this.http.get(`https://www.omdbapi.com/?apikey=33865882&!=${this.movieId}`).subscribe((data)=>{
      this.movieDetail = data
      console.warn(data)
    })
   }

   ngOnInit(): void {
  }

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
