import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './pages/errorpage/errorpage.component';
import { HomeComponent } from './pages/home/home.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ClubPageComponent } from './pages/club-page/club-page.component';
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
    component: RegisterComponent
  },
  {
    path:'club/:id',
    component:ClubPageComponent
  },
  {
    path:'**',
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
