import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  noSearch: boolean = true;
  searchName: any = localStorage.getItem("searchname");
  movies:any;

  ngOnInit(): void { }

  constructor(private movieService:MovieService){
    this.movieService.getData(this.searchName).subscribe((data)=>{
          this.movies = data
        })
  }

  onSearch(){
    localStorage.setItem("searchname", this.searchName)
    this.movieService.getData(this.searchName).subscribe((data)=>{
      this.movies = data
      console.warn(this.movies)
    })
  }


}