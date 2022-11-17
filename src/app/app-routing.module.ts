import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WatchedMoviesComponent } from './watched-movies/watched-movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', component: MovieComponent },
  { path: 'movie', component: MovieComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'watchlist/:id', component: ReviewComponent },
  { path: 'watchedmovies', component: WatchedMoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
