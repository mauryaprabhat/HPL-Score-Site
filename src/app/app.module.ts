import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TeamsPlayersComponent } from './teams-players/teams-players.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamsPlayersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
