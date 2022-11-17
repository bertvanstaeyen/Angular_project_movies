import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watched',
  templateUrl: './watched-movies.component.html',
  styleUrls: ['./watched-movies.component.css']
})
export class WatchedMoviesComponent implements OnInit {

  movies:any;
  filterName = localStorage.getItem("filterName");

  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/moviedetail').subscribe(data => {
      this.movies = data;

      console.warn(data)
      });
  }

  ngOnInit(): void {
  }

  removeMovie(id: string) {
    console.warn(`http://localhost:3000/moviedetail/` + id)
    this.http.delete(`http://localhost:3000/moviedetail/` + id).subscribe()
    window.location.reload();
  }
}