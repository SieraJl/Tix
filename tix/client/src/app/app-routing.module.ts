import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ClubPageComponent } from './pages/club-page/club-page.component';
import { AuthGuard } from './guards/auth.guard';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';
import { CalenderComponent } from './pages/calender/calender.component';
import { PredirComponent } from './pages/predir/predir.component';
import { PaymentComponent } from './pages/payment/payment.component';
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'matches',
    component: MatchesComponent
  },
  {
    path:'shop',
    component: ShopComponent
  },
  {
    path:'register',  
    component: RegisterComponent,
    canActivate: [
      NotLoggedInGuard
  ]
  },
  {
    path:'club/:id',
    component:ClubPageComponent
  },
  {
    path:'payment/:id',
    component:PaymentComponent
  },
  {
    path:'calender',
    component:CalenderComponent
  },
  {
    path:'predir',
    component:PredirComponent
  },
  {
    path:'**',
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
