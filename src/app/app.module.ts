import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { WatchedMoviesComponent } from './watched-movies/watched-movies.component';
import { MovieComponent } from './movie/movie.component';

import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WatchlistComponent,
    WatchedMoviesComponent,
    MovieComponent,
    MovieDetailComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
