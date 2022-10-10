import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchedMoviesComponent } from './watched-movies/watched-movies.component';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'watchedmovies', component: WatchedMoviesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
