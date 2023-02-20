// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Modules
import { LayoutModule } from '../layout/layout.module';

// Components
import { ThemeComponent } from './theme.component';
import { HomeComponent } from './home/home.component';
import { GenreComponent } from './genre/genre.component';
import { GenreDetailsComponent } from './genre/genre-details/genre-details.component';
import { SongComponent } from './song/song.component';
import { SongDetailsComponent } from './song/song-details/song-details.component';
import { AddSongComponent } from './song/add-song/add-song.component';
import { AlbumComponent } from './album/album.component';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistDetailsComponent } from './artist/artist-details/artist-details.component';
import { EventComponent } from './event/event.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { StationComponent } from './station/station.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { AnalyticsComponent } from './user/analytics/analytics.component';
import { FavoriteComponent } from './user/favorite/favorite.component';
import { HistoryComponent } from './user/history/history.component';
import { ProfileComponent } from './user/profile/profile.component';
import { SettingsComponent } from './user/settings/settings.component';
import { PlanComponent } from './user/plan/plan.component';


//
// Theme routes
const routes: Routes = [
  {
    path: '',
    component: ThemeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'genre',
        component: GenreComponent
      },
      {
        path: 'genre/:id/details',
        component: GenreDetailsComponent
      },
      {
        path: 'song',
        component: SongComponent
      },
      {
        path: 'song/:id/details',
        component: SongDetailsComponent
      },
      {
        path: 'add-song',
        component: AddSongComponent
      },
      {
        path: 'album',
        component: AlbumComponent
      },
      {
        path: 'album/:id/details',
        component: AlbumDetailsComponent
      },
      {
        path: 'artist',
        component: ArtistComponent
      },
      {
        path: 'artist/:id/details',
        component: ArtistDetailsComponent
      },
      {
        path: 'events',
        component: EventComponent
      },
      {
        path: 'event/:id/details',
        component: EventDetailsComponent
      },
      {
        path: 'stations',
        component: StationComponent
      },
      {
        path: 'add-event',
        component: AddEventComponent
      },
      {
        path: 'analytics',
        component: AnalyticsComponent
      },
      {
        path: 'favorites',
        component: FavoriteComponent
      },
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'plan',
        component: PlanComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ThemeComponent,
    HomeComponent,
    GenreComponent,
    GenreDetailsComponent,
    SongComponent,
    SongDetailsComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    ArtistComponent,
    ArtistDetailsComponent,
    AnalyticsComponent,
    FavoriteComponent,
    HistoryComponent,
    ProfileComponent,
    SettingsComponent,
    PlanComponent,
    EventComponent,
    EventDetailsComponent,
    AddEventComponent,
    StationComponent,
    AddSongComponent
  ],
  imports: [
    // Angular
    CommonModule,

    // Modules
    LayoutModule,

    // Import router module
    RouterModule.forChild(routes)
  ]
})
export class ThemeModule { }
