import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainSliderComponent } from './components/main-slider/main-slider.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchListItemComponent } from './components/match-list-item/match-list-item.component';
import { NextMainMatchComponent } from './components/next-main-match/next-main-match.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { TicketGroupComponent } from './components/ticket-group/ticket-group.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { PageBannerComponent } from './components/page-banner/page-banner.component';
import { RegisterClientComponent } from './components/register-client/register-client.component';
import { RegisterComponent } from './pages/register/register.component';
import { NextMatchesComponent } from './components/next-matches/next-matches.component';
import { StandingTableComponent } from './components/standing-table/standing-table.component';
import { StandingLineComponent } from './components/standing-line/standing-line.component';
import { StandingOneTableComponent } from './components/standing-one-table/standing-one-table.component';
import { ClubPageComponent } from './pages/club-page/club-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainSliderComponent,
    MatchListComponent,
    MatchListItemComponent,
    NextMainMatchComponent,
    TicketComponent,
    TicketGroupComponent,
    FooterComponent,
    MatchesComponent,
    HomeComponent,
    ShopComponent,
    ErrorpageComponent,
    PageBannerComponent,
    RegisterClientComponent,
    RegisterComponent,
    NextMatchesComponent,
    StandingTableComponent,
    StandingLineComponent,
    StandingOneTableComponent,
    ClubPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
