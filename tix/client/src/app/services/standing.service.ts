import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StandingService  {

  constructor(private http: HttpClient) {}

    getStandings(): Observable<any>{
      return this.http.get('https://stats.fn.sportradar.com/bet365/fr/Europe:Berlin/gismo/stats_season_tables/98175/0');
    }
   

}